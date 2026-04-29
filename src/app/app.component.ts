import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente principal de la aplicación Angular.
 * Este componente actúa como el contenedor raíz de la aplicación,
 * proporcionando la estructura general con encabezado, navegación y pie de página.
 * Utiliza enrutamiento para navegar entre las diferentes secciones.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="app-shell">
      <header class="site-header">
        <div class="container nav-shell">
          <a class="brand" routerLink="/">PT</a>
          <nav class="main-nav" aria-label="Principal">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
            <a routerLink="/" fragment="about">Acerca de nosotros</a>
            <a routerLink="/" fragment="services">Servicios</a>
            <a routerLink="/" fragment="packages">Paquetes</a>
            <a routerLink="/contact" class="nav-button">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="site-footer">
        <div class="container footer-shell">
          <a class="brand brand-small" routerLink="/">PT</a>
          <nav class="footer-nav" aria-label="Secundaria">
            <a routerLink="/" fragment="about">Acerca de nosotros</a>
            <a routerLink="/" fragment="services">Servicios</a>
            <a routerLink="/" fragment="packages">Proyectos</a>
          </nav>
          <div class="footer-social">
            <a routerLink="/contact">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Este componente no tiene lógica adicional, solo estructura la plantilla
}
