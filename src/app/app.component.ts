import { Component,OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo';

  constructor(private WebsocketService:WebsocketService){}

  ngOnInit(){
    // this.WebsocketService.listen('test event').subscribe((data)=>{
    //   console.log(data);
    // })
  }
}
