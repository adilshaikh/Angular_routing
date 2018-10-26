import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { serversService } from "../servers.service";
interface Servers {
    id: number;
    name: string;
    status: string
}

@Injectable()
export class serverResolver implements Resolve<Servers>{
    constructor(private serverService: serversService ){

    }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Servers> | Promise<Servers> | Servers {
    return this.serverService.ongetServer(+route.params['id']);
}
}