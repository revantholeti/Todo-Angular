import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoDetailsDialogComponent } from '../todo-details-dialog/todo-details-dialog.component';

export interface DialogData { id: number, item: string, status: string, dateofCreation: string, timeofCreation: string, comments:Array<Type>, scheduledate: string }
export interface Type { comments:string};
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  data: any[] = [
    { id: 1, item: 'Logout', status: 'created', dateofCreation: (new Date).toLocaleDateString(), timeofCreation: (new Date).toLocaleTimeString(), comments:[], scheduledate: '' },
    { id: 2, item: 'Login', status: 'onProgress', dateofCreation: (new Date).toLocaleDateString(), timeofCreation: (new Date).toLocaleTimeString(), comments: [], scheduledate: '' },
    { id: 3, item: 'Shutdown', status: 'completed', dateofCreation: (new Date).toLocaleDateString(), timeofCreation: (new Date).toLocaleTimeString(), comments: [], scheduledate: '' }
  ];

  bool: boolean;
  todoitem: string;
  dialogdata: any;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(TodoDetailsDialogComponent, {
      width: '500px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      let index = this.data.findIndex(item=>item.id===result.id);
      this.data[index]=result;
    });
  }

  addItem() {
    let newid = this.data.length;
    let date = (new Date).toLocaleDateString();
    let time = (new Date).toLocaleTimeString()
    this.data.push({ id: newid, item: this.todoitem, status: 'created', dateofCreation: date, timeofCreation: time,comments: [], scheduledate: '' });
    this.todoitem = null;
  }

  statusChaged(i, status) {
    console.log(i.id + ' ' + status);
    i.status = status;
    this.checkStatus(i)
  }

  checkStatus(item) {
    if (item.status === 'created') {
      this.bool = true;
    }
    else {
      this.bool = false;
    }
  }

  dialogvalues(item) {
    this.dialogdata = item;
  }



}