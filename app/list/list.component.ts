import { Component } from '@angular/core';
import { folders , Folder} from '../folders';  
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { User, users } from '../users';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    folders: Folder[] = folders;
    user: User = users[0];
    folders2 : Folder[] = [];
    drop(event: CdkDragDrop<Folder[]>) {
      console.log(event)
      console.log(event.container.data)
      console.log(event.previousContainer.data)
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

}