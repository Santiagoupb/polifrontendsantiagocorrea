import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Componente del formulario de contacto.
 * Permite a los usuarios enviar mensajes con validación básica.
 * Incluye animaciones para una mejor experiencia visual.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  // Propiedades del formulario
  name = ''; // Nombre del usuario
  email = ''; // Correo electrónico
  subject = ''; // Asunto del mensaje
  message = ''; // Contenido del mensaje
  feedback = ''; // Mensaje de retroalimentación

  /**
   * Maneja el envío del formulario.
   * Valida los campos y muestra retroalimentación.
   * @param event El evento de envío del formulario.
   */
  submitForm(event: Event) {
    event.preventDefault(); // Previene el envío por defecto

    // Validación básica
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.feedback = 'Completa todos los campos para enviar el mensaje.';
      return;
    }

    // Simula el envío exitoso
    this.feedback = 'Gracias por tu mensaje. Pronto nos comunicaremos contigo.';
    // Limpia el formulario
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
