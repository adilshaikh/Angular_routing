import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanDeactivateComponent {
    canDeactivate: () => Observable<boolean>| Promise<boolean>| boolean
}
export class canDeactivateGuard implements CanDeactivate<CanDeactivateComponent>{
    canDeactivate(component: CanDeactivateComponent,    //it will be called  by angular router when we try to leave the route
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextstate?: RouterStateSnapshot): Observable<boolean>| Promise<boolean>| boolean{
            return component.canDeactivate(); //we have to call the component on which its sits on we need to implement the component. 
         } 
}