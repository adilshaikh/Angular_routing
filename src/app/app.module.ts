import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './servers/edit/edit.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { serversService } from './servers/servers.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouting } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { canDeactivateGuard } from './servers/edit/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { serverResolver } from './servers/server/server-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    EditComponent,
    ServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [serversService, AuthGuard, AuthService, canDeactivateGuard,serverResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
