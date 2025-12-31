import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Resume } from './features/resume/resume';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'resume', component: Resume},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
];

