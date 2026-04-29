import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

/**
 * Punto de entrada principal de la aplicación Angular.
 * Configura e inicia la aplicación con el componente raíz,
 * enrutamiento y animaciones.
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveedor de enrutamiento con las rutas definidas
    provideAnimations(), // Proveedor de animaciones para transiciones
  ],
}).catch((err) => console.error(err)); // Manejo de errores durante el arranque
