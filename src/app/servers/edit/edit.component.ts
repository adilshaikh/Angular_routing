import { Component, OnInit } from '@angular/core';
import { serversService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, CanDeactivateComponent{
server: {id: number, name: string, status: string};
serverName='';
serverStatus='';
allowEdit =  false;
changesSaved = false;
  constructor(private svrService: serversService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id']
    this.server = this.svrService.ongetServer(id);
    //subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
onUpdateServer(){
  this.svrService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus})
  this.changesSaved = true;
  this.router.navigate(['../'], {relativeTo: this.route });
}
canDeactivate(): Observable<boolean> | Promise<boolean>| boolean {
  if(!this.allowEdit){
    return true;
  }
  if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
    return confirm('Do You Want To Discard the Changes?')
  }else {
    return true;
  }
}
}
