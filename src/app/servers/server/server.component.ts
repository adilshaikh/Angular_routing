import { Component, OnInit } from '@angular/core';
import { serversService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
server: {id: number, name:string, status: string};
  constructor(private svrService: serversService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //alternative method using resolver
    this.route.data.subscribe(  
      (data: Data) => {
        this.server = data['server'];//the name ['..'] has to be matched with the name defined in resolve property in app-routing
      }
    )
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.svrService.ongetServer(id);
    // this.route.queryParams
    // this.route.params.subscribe(
    //   (params: Params)=>{
    //     this.server = this.svrService.ongetServer(+params['id']);
    //   }
    // )
  }
  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
