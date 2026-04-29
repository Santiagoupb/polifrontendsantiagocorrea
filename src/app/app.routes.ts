import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

/**
 * Definición de rutas de la aplicación.
 * Configura las rutas principales para navegación.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz, muestra la página de inicio
  { path: 'contact', component: ContactComponent }, // Ruta para el formulario de contacto
  { path: '**', redirectTo: '' }, // Ruta comodín, redirige a la página de inicio
];
