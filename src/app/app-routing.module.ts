import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JunglersComponent }   from './champions/junglers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-junglers',  component: JunglersComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
