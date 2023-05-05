import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { users, User } from '../users';
import { Folder } from '../folders';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drag-drop-window',
  templateUrl: './drag-drop-window.component.html',
  styleUrls: ['./drag-drop-window.component.css']
})
export class DragDropWindowComponent implements OnInit {
  users : User[] = users;
  user: User = users[0];
  
  constructor(private router : Router, private route : ActivatedRoute){}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.user = users[id];
  }

  

    drop(event: CdkDragDrop<Folder[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
      }

    onCancel(){
      this.router.navigate(['home']);
    }
}
