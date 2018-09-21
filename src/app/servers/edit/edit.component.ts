import { Component, OnInit } from '@angular/core';
import { serversService } from '../servers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
server: {id: number, name: string, status: string};
serverName='';
serverStatus='';
  constructor(private svrService: serversService) { }

  ngOnInit() {
    this.server = this.svrService.ongetServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
onUpdateServer(){
  this.svrService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus})
}

}
