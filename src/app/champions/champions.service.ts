import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export interface Champion {
  name: string,
  type: string,
  img: string
}

@Injectable()
export class ChampionsService {
  private junglersUrl = 'http://localhost:8080/getJunglers';  // URL to web API
  private addJunglerUrl = 'http://localhost:8080/addJungler';

  junglers = [
    {
      name:'Zac',
      type:'tank',
      imgUrl:'http://www.mobafire.com/images/champion/icon/zac.png'
    },
    {
      name:'Sejuani',
      type:'tank',
      imgUrl:'http://www.mobafire.com/images/champion/icon/sejuani.png'
    }
  ];

  constructor(private http: Http) { }

  /*getTopJunglers(): Champion[] {
    return this.junglers;
  }*/

  getTopJunglers():Observable<Champion[]> {
    return this.http.get(this.junglersUrl)
            .map(this.extractData)
            .catch(this.handleError);
  }

  addTopJunglers(name:string,type:string,img:string){
    //this.junglers.push({'name':name,'type':type,'imgUrl':img});
    //send to server...
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({'name':name,'type':type,'imgUrl':img});
    console.log(body);
    return this.http.post(this.addJunglerUrl, body,options)
                .map((res: Response) => res.json())
                .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    return Observable.throw("error get junglers");
  }

}
