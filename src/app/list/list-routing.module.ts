import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { DragDropWindowComponent } from '../drag-drop-window/drag-drop-window.component';

const routes : Routes = [
    { path :'', component: ListComponent
    
    // , children :[
    //   { path : ':id', component: DragDropWindowComponent }
    // ] 
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListRoutingModule { }
