import { Component, OnInit } from '@angular/core';
import { serversService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
server: {id: number, name:string, status: string};
  constructor(private svrService: serversService) { }

  ngOnInit() {
    this.server = this.svrService.ongetServer(2);
  }

}
