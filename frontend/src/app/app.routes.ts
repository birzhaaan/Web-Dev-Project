import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { MeComponent } from './users/me/me.component';
import { SignupComponent } from './users/signup/signup.component';
import { VolunteerListComponent } from './users/volunteer-list/volunteer-list.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateRequestComponent } from './requests/create-request/create-request.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: SignupComponent},
    { path: 'me', component: MeComponent},

    { path: 'volunteers', component: VolunteerListComponent },
    { path: 'requests', component: RequestsComponent,
        children:[ {path: 'create', component: CreateRequestComponent}],
    },
    // { path: 'page3', component: Page3Component },

];
