import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserData, LoginWindowComponent } from './login-window/login-window.component';
import { User, users } from './users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  userData ?: UserData;
  sideWindow : boolean = false;
  
  constructor(public dialog: MatDialog, private router : Router) {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == "x"){
      this.openLoginWindowDialog();
    }
  }

  users : User[] = users;
  openLoginWindowDialog() {
    let dataToPass: UserData = {
      username : '',
      password : '',
    }; 

    function makeid(length :number) : string {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }


    const dialogRef = this.dialog.open(LoginWindowComponent, {
      width: '300px',
      data: { ...dataToPass },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if( result.username !== '' && result.password !== '') {
        this.userData = result === undefined ? this.userData : result;
        
      }
      //search user->if not found create another -> open hidden folders
      for( let i = 0 ; i < users.length ; i++){
        if(this.userData?.password === users[i].password && this.userData?.username === users[i].username){
          this.router.navigate(['home', i]);  
          return;
        }
      }

      let newUser: User = {
        id : makeid(5),
        username : this.userData?.username,
        password : this.userData?.password,
        folders : []
      };
      users.push(newUser);
      this.router.navigate(['home', users.length -1]);  

    });
  }
}
