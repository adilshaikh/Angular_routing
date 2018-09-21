import { Component, OnInit } from '@angular/core';
import { serversService } from './servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
private servers: {id: number, name: string, status: string}[] =[];

  constructor(private svrService: serversService, private router: Router) { }

  ngOnInit() {
    this.servers = this.svrService.getServers();
  }
onReload(){
  this.router.navigate(['/servers'])
}
}
