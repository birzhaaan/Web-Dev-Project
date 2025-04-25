import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { MeComponent } from './users/me/me.component';
import { SignupComponent } from './users/signup/signup.component';
import { VolunteerListComponent } from './users/volunteer-list/volunteer-list.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateRequestComponent } from './requests/create-request/create-request.component';
import { EditUserComponent } from './users/me/edit-user/edit-user.component';
import { SessionListComponent } from './chat/session-list/session-list.component';
import { MessageSessionComponent } from './chat/message-session/message-session.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: SignupComponent},
    { path: 'me', component: MeComponent,
        children: [ {path: 'edit', component: EditUserComponent}]},

    { path: 'volunteers', component: VolunteerListComponent },
    { path: 'requests', component: RequestsComponent,
        children:[ {path: 'create', component: CreateRequestComponent}],
    },
    { path: 'messages', component: SessionListComponent, pathMatch: 'full',
        children: [{path: ':id', component: MessageSessionComponent}]
    },


];
