import { Injectable } from '@angular/core';

/**
 * Interfaz que define la estructura de un elemento de servicio.
 */
export interface ServiceItem {
  id: string; // Identificador único del servicio
  name: string; // Nombre del servicio
  category: string; // Categoría del servicio
  description: string; // Descripción detallada
  price: string; // Precio del servicio
}

/**
 * Servicio para manejar la obtención de servicios.
 * Proporciona métodos para cargar datos de servicios desde un archivo JSON.
 */
@Injectable({
  providedIn: 'root', // Disponible en toda la aplicación
})
export class ServicesService {
  /**
   * Obtiene la lista de servicios desde el archivo JSON.
   * @returns Una promesa que resuelve a un array de ServiceItem.
   * @throws Error si no se pueden cargar los servicios.
   */
  async getServices(): Promise<ServiceItem[]> {
    const response = await fetch('/assets/data/services.json'); // Ruta al archivo de datos

    if (!response.ok) {
      throw new Error('No se pudieron cargar los servicios.');
    }

    return response.json(); // Parsea y devuelve los datos JSON
  }
}
