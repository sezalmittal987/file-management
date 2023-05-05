import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { DragDropWindowComponent } from './drag-drop-window/drag-drop-window.component';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormsModule } from '@angular/forms'; 

import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'home', component : ListComponent,children :[
      { path : ':id', component: DragDropWindowComponent }
    ] },
  { path : '' , redirectTo : '/home',pathMatch: 'full'},
  { path: 'hidden-files', component: DragDropWindowComponent,  pathMatch: 'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginWindowComponent,
    DragDropWindowComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
