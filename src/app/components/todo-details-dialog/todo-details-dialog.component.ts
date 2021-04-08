import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData,Type } from '../todo/todo.component';

@Component({
  selector: 'app-todo-details-dialog',
  templateUrl: './todo-details-dialog.component.html',
  styleUrls: ['./todo-details-dialog.component.css']
})
export class TodoDetailsDialogComponent implements OnInit {


  comment:Type;
  constructor(public dialogRef: MatDialogRef<TodoDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addComment(){
    this.data.comments.push(this.comment);
    console.log(this.data.comments);
    this.comment= null;
  }

}
