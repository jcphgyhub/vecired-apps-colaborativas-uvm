# VeciRed

**Actividad 4 · Apps colaborativas — Punto 5**

VeciRed es una aplicación web funcional de economía colaborativa local. La propuesta organiza tres problemas detectados en la investigación:

1. Préstamo y uso compartido de objetos y herramientas.
2. Intercambio local de productos.
3. Localización y recomendación de servicios confiables.

## Idea central

**Utilizar en lugar de poseer.**

VeciRed transforma conversaciones informales en procesos estructurados:

- búsqueda;
- solicitud;
- aceptación;
- seguimiento;
- devolución / confirmación;
- reputación;
- calificación;
- incidencias.

## Stack

Versiones seleccionadas con criterio estable/LTS al 2 de octubre de 2026:

- Next.js 16.3.8 (Active LTS)
- React 19.3.0
- Tailwind CSS 4.3.x
- TypeScript
- TanStack Query
- TanStack Table
- Zustand
- React Hook Form
- Zod
- Lucide React
- Motion

La aplicación está preparada para sustituir repositorios mock por adaptadores HTTP hacia microservicios Spring Boot + PostgreSQL.

## Ejecutar

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Demo

La app funciona por defecto con:

```env
NEXT_PUBLIC_USE_MOCKS=true
```

Usuario demo:

- María Hernández
- San Miguel Tecamachalco
- reputación 4.8
- 12 operaciones completadas

## Rutas principales

- `/` — Landing
- `/login` — Inicio de sesión demo
- `/register` — Registro demo
- `/dashboard` — Página principal
- `/loans` — Préstamos
- `/loans/loan-taladro` — Detalle de taladro / flujo principal para video
- `/exchanges` — Intercambios
- `/exchanges/ex-cafetera` — Intercambio demo
- `/services` — Servicios locales
- `/services/svc-electricista` — Electricista demo
- `/profile` — Perfil y reputación
- `/history` — Historial
- `/impact` — Impacto circular
- `/notifications` — Notificaciones
- `/incidents` — Reportes e incidencias
- `/help` — Centro de ayuda estructural

## Flujo principal para el video

Historia:

> “Necesito un taladro, pero no quiero comprar uno para usarlo una sola tarde.”

Recorrido:

1. Inicio.
2. Dashboard.
3. Préstamos.
4. Buscar “taladro”.
5. Abrir detalle.
6. Revisar reputación de Carlos Mendoza.
7. Solicitar préstamo.
8. Mostrar seguimiento / confianza.
9. Mostrar impacto circular.
10. Cierre VeciRed.

Mensajes visuales:

- “Comparte, intercambia y encuentra cerca de ti.”
- “Utilizar en lugar de poseer.”
- “Más uso, menos desperdicio.”

## Arquitectura

```text
Next.js / React
      ↓
Repositories / Adapters
      ↓
Mock repository (demo)
      ↓
futuro HttpRepository
      ↓
Spring Boot microservices
      ↓
PostgreSQL
```

Los componentes de interfaz no contienen arrays de datos demo. Los datos están centralizados en `src/mocks` y expuestos mediante `src/lib/repositories`.

## Centro de ayuda

Esta entrega implementa la arquitectura funcional del Centro de Ayuda y títulos breves de ejemplo.

Los manuales extensos quedan deliberadamente fuera de esta entrega, tal como se especificó. La futura entrega puede completar:

- manual de préstamos;
- manual de devoluciones;
- manual de intercambios;
- manual de servicios;
- manual de reputación;
- manual de seguridad;
- manual de incidencias;
- preguntas frecuentes.

## Integración Spring Boot

Contratos previstos:

```text
POST /api/auth/login
POST /api/auth/register
GET  /api/auth/me

GET   /api/loans/items
POST  /api/loans/items
GET   /api/loans/items/{id}
POST  /api/loans/requests
PATCH /api/loans/requests/{id}/accept
PATCH /api/loans/{id}/returned

GET   /api/exchanges/products
POST  /api/exchanges/proposals
PATCH /api/exchanges/proposals/{id}/accept
PATCH /api/exchanges/{id}/complete

GET   /api/services/providers
POST  /api/services/requests
PATCH /api/services/requests/{id}/accept
PATCH /api/services/requests/{id}/complete

POST /api/ratings

POST /api/incidents
GET  /api/incidents/{id}
GET  /api/incidents/me
```

Se recomienda que Spring Boot publique OpenAPI y que el frontend genere contratos TypeScript para evitar duplicación.

## Alcance de seguridad del demo

La versión demo muestra:

- historial;
- reputación;
- operaciones completadas;
- fechas;
- incidencias;
- estado de reportes.

No afirma realizar verificación oficial de identidad. Esa integración requeriría un backend y proceso real.

## Economía colaborativa

Fórmula de producto:

```text
RECURSO DESAPROVECHADO
+ PERSONA QUE LO NECESITA
+ VECIRED
= ECONOMÍA COLABORATIVA
```

## Economía circular

La pantalla `/impact` muestra métricas demo para comunicar:

- objetos reutilizados;
- préstamos completados;
- intercambios completados;
- compras evitadas;
- recursos compartidos;
- servicios locales contratados.

## QA sugerido

Antes de la presentación:

1. `npm install`
2. `npm run dev`
3. validar rutas;
4. validar móvil 375 px;
5. validar tablet 768 px;
6. validar escritorio 1440 px;
7. recorrer el flujo del taladro;
8. capturar las pantallas para el video;
9. confirmar que no se muestren pantallas vacías;
10. verificar contraste y navegación con teclado.

---

## Presentación académica UVM (V4)

La versión V4 integra el contexto académico dentro de la propia aplicación para que la demostración pueda grabarse como un solo recorrido de producto.

### Rutas nuevas

- `/presentacion` — introducción académica UVM + VeciRed.
- `/presentacion/recorrido` — activa el modo de recorrido para evaluación.

### Identidad académica

- Institución: Universidad del Valle de México (UVM)
- Asignatura: Diseñar para Compartir
- Actividad: Actividad 4 · Apps colaborativas
- Alumno: Juan Carlos Perez Hernández
- Docente: Alba Pulido Pineda

> El proyecto no incluye un logotipo UVM dibujado por IA. La pantalla utiliza la denominación tipográfica `UVM`; puede sustituirse por un asset oficial si el usuario lo proporciona.

## Usuarios demo

El usuario predeterminado es `Juan Carlos Perez Hernández` (`STUDENT`). También pueden seleccionarse desde Perfil:

- Alba Pulido Pineda (`TEACHER`)
- María Hernández (`DEMO`)

Carlos Mendoza y Laura Gómez permanecen como miembros demo de la comunidad y contrapartes de operaciones.

Los datos de reputación, reseñas y operaciones son demostrativos y se muestran con la indicación **Datos demo** donde corresponde.

## Centro de Ayuda V4

La ayuda ahora es data-driven (`src/content/help.ts`) e incluye artículos breves sobre:

- primeros pasos;
- préstamos;
- devoluciones;
- intercambios;
- servicios locales;
- reputación;
- seguridad;
- reportes e incidencias;
- perfil y cuenta;
- economía colaborativa;
- modo presentación.

Los botones **Abrir ayuda breve** abren un drawer con resumen, pasos, consejo y acceso a la función relacionada.

## Ayuda contextual

Se incorporaron ayudas no invasivas en Dashboard, Préstamos, Intercambios, Servicios, Impacto, Historial y páginas de detalle. Los tooltips se reservan para conceptos breves como reputación, incidencias y datos demo.

## Modo presentación

Desde `/presentacion/recorrido` se puede activar una barra discreta para recorrer:

`Dashboard → Préstamos → Intercambios → Servicios → Impacto → Ayuda`

El modo puede cerrarse en cualquier momento y no modifica los flujos principales de la aplicación.

## Recorrido sugerido para video integrado

`Presentación UVM → Landing VeciRed → Dashboard → Préstamos → Intercambios → Servicios → Impacto → Ayuda → Cierre`

Mensajes clave:

- **Comparte, intercambia y encuentra cerca de ti.**
- **Utilizar en lugar de poseer.**
- **Más uso, menos desperdicio.**
