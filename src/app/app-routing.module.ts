import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{} from '@angular/router'
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path: '',
    pathMatch:'full',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
