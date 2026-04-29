Proyecto Frontend Angular – Agencia de Viajes
Entregas Semana 5 y Semana 7
Descripción General

LINK DE LA APP


https://staging.d3rtla1ym3ow7b.amplifyapp.com/contact



Este proyecto consiste en el desarrollo de una aplicación web para una agencia de viajes especializada en servicios académicos, institucionales y turísticos. La solución fue diseñada con el objetivo de digitalizar la oferta de servicios, mejorar la experiencia del usuario y facilitar la gestión de solicitudes en línea.

La aplicación fue desarrollada utilizando Angular como framework principal y se encuentra desplegada en la nube mediante AWS Amplify, permitiendo acceso en producción con alta disponibilidad y escalabilidad.

Objetivos del Proyecto
Implementar una aplicación web moderna utilizando Angular.
Diseñar una interfaz responsiva orientada a usuarios académicos e institucionales.
Integrar funcionalidades dinámicas como búsqueda, favoritos y formularios con validación.
Realizar despliegue en la nube utilizando servicios de AWS.
Aplicar buenas prácticas de desarrollo frontend y control de versiones.
Tecnologías Utilizadas
Angular (Framework frontend)
TypeScript
HTML5 y CSS3
Google Fonts (Poppins)
AWS Amplify (Hosting y despliegue)
Git y GitHub (Control de versiones)
JSON (Manejo de datos estáticos)
Arquitectura de la Aplicación

La aplicación sigue una arquitectura modular basada en Angular:

Componentes principales:
AppComponent: estructura base de la aplicación
HomeComponent: página principal
ContactComponent: formulario de contacto
Servicios:
ServicesService: encargado de consumir y gestionar datos desde archivos JSON
Ruteo:
Implementación de navegación entre vistas mediante Angular Router
Datos:
Archivo services.json ubicado en la carpeta assets, que contiene la información de los servicios ofrecidos
Funcionalidades Implementadas
Página de Inicio

Incluye una sección principal con información de la agencia, beneficios del servicio como asesoría personalizada, opciones según presupuesto y atención rápida. Se incorporan llamados a la acción que permiten al usuario planear viajes, guardar servicios como favoritos y solicitar asesoría.

Catálogo de Servicios

Se presenta un listado dinámico de servicios turísticos, incluyendo paquetes académicos, reservas de vuelos, seguros de viaje, tours personalizados, hospedaje y salidas institucionales. Los datos son cargados desde un archivo JSON y permiten filtrado mediante búsqueda en tiempo real.

Sistema de Favoritos

Permite al usuario seleccionar servicios de interés y visualizar un contador de elementos seleccionados, mejorando la experiencia de navegación.

Página de Contacto

Incluye un formulario con validación de campos obligatorios como nombre, correo electrónico, asunto y mensaje. Si los campos no son diligenciados correctamente, el sistema solicita su validación. Adicionalmente, el formulario incorpora cambios de color dinámicos para mejorar la interacción del usuario.

Accesibilidad y Experiencia de Usuario

Se implementaron etiquetas ARIA, roles semánticos y animaciones como fade-in y slide-in, mejorando la accesibilidad y la experiencia visual.

Despliegue

La aplicación fue compilada en modo producción utilizando Angular CLI y desplegada en AWS Amplify mediante hosting estático. Este enfoque permite una entrega continua, acceso mediante URL pública y escalabilidad automática.

Estructura del Proyecto
src/app: componentes y lógica principal
src/assets: recursos estáticos y datos JSON
src/environments: configuración de entornos
angular.json: configuración del proyecto Angular
package.json: dependencias del proyecto
Estado del Proyecto

La aplicación se encuentra completamente funcional, desplegada en AWS Amplify y lista para uso en producción. Incluye validaciones, manejo de errores y una interfaz adaptativa a distintos dispositivos.
