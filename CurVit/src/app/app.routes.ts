import { Routes } from '@angular/router';
import { Home } from './features/home/home';

/**
 * Una sola página: todas las secciones viven dentro de Home y se navegan
 * con anclas (#sobre-mi, #proyectos, etc.).
 * Las rutas antiguas se redirigen a la portada.
 */
export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
