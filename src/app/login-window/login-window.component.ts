import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData{
  username : string;
  password : string;
} 

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})


export class LoginWindowComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: UserData
  ) {}


  onCancel() {
    this.dialogRef.close();
  }

  loginUser(){
    this.dialogRef.close(this.userData);
  }
}
