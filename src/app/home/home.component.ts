import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ServicesService, ServiceItem } from '../services.service';

/**
 * Componente de la página de inicio.
 * Muestra la información principal del sitio, incluyendo servicios,
 * búsqueda, favoritos y animaciones.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  // Señales para manejar el estado reactivo
  services = signal<ServiceItem[]>([]); // Lista completa de servicios
  filteredServices = signal<ServiceItem[]>([]); // Servicios filtrados por búsqueda
  searchQuery = ''; // Consulta de búsqueda actual
  favorites = signal<string[]>([]); // IDs de servicios favoritos
  status = signal('Cargando servicios...'); // Mensaje de estado

  constructor(private servicesService: ServicesService) {
    this.loadServices(); // Cargar servicios al inicializar
  }

  /**
   * Carga los servicios desde el servicio.
   * Actualiza las señales de servicios y estado.
   */
  async loadServices() {
    try {
      const list = await this.servicesService.getServices();
      this.services.set(list);
      this.filteredServices.set(list);
      this.status.set(`${list.length} servicios disponibles.`);
    } catch {
      this.status.set('Ocurrio un error al cargar los servicios.');
    }
  }

  /**
   * Maneja el cambio en la consulta de búsqueda.
   * @param query La nueva consulta de búsqueda.
   */
  onSearchChange(query: string) {
    this.filterServices(query);
  }

  /**
   * Filtra los servicios basados en la consulta.
   * @param query La consulta de búsqueda.
   */
  filterServices(query: string) {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      this.filteredServices.set(this.services());
      this.status.set(`${this.services().length} servicios disponibles.`);
      return;
    }

    const filtered = this.services().filter((service) =>
      [service.name, service.category, service.description].some((value) =>
        value.toLowerCase().includes(normalized)
      )
    );

    this.filteredServices.set(filtered);
    this.status.set(`${filtered.length} resultado(s) para "${query}".`);
  }

  /**
   * Alterna el estado de favorito para un servicio.
   * @param serviceId El ID del servicio.
   */
  toggleFavorite(serviceId: string) {
    if (this.favorites().includes(serviceId)) {
      this.favorites.set(this.favorites().filter((id) => id !== serviceId));
    } else {
      this.favorites.set([...this.favorites(), serviceId]);
    }
  }

  /**
   * Getter para el conteo de favoritos.
   */
  get favoritesCount() {
    return this.favorites().length;
  }
}
