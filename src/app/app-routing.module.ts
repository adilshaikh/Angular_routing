import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditComponent } from "./servers/edit/edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { serverResolver } from "./servers/server/server-resolver.service";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },   
    { path: 'servers',
    //canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [{path: ':id', component: ServerComponent, resolve: {server: serverResolver}, 
    {path: ':id/edit', component: EditComponent, canDeactivate: [canDeactivateGuard]} ]  }, 
    //{path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Error! Invalid Address'} }, //we pass it here so that it can be reusable.
    {path: '**', redirectTo: '/not-found'},
  ];
@NgModule({
//noneed to declare components over here. its already done in app.module.ts
imports:[
    RouterModule.forRoot(routes)
],
exports : [RouterModule]
})
export class AppRouting {

}