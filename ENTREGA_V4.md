# VeciRed V4 — Integración académica UVM

## Objetivo

Integrar el contexto académico, usuarios demo y ayuda contextual dentro del producto, sin convertir VeciRed en una presentación estática.

## Cambios principales

1. Nueva ruta `/presentacion` con UVM, Actividad 4, VeciRed, alumno y docente.
2. Nueva ruta `/presentacion/recorrido` para activar el modo de evaluación.
3. Usuario demo predeterminado: Juan Carlos Perez Hernández.
4. Catálogo demo con Juan Carlos, Alba Pulido Pineda, María Hernández, Carlos Mendoza y Laura Gómez.
5. Selector de usuario demo en Perfil.
6. `personaType` separado de `role` técnico.
7. Avatares SVG nuevos para Juan Carlos y Alba.
8. AppShell consume el usuario demo actual y muestra tipo de persona.
9. Presentación accesible desde la navegación lateral.
10. Centro de Ayuda data-driven con artículos breves y buscador funcional.
11. Drawers de ayuda con pasos y enlaces a funciones.
12. Ayuda contextual en Dashboard, Préstamos, Intercambios, Servicios, Impacto e Historial.
13. Tooltips en reputación, incidencias y datos demo.
14. Badge `Datos demo` en Perfil e Impacto.
15. Landing actual conservada; se agregó acceso discreto a Presentación UVM.
16. Login y registro demo actualizados a Juan Carlos.

## Rutas nuevas

- `/presentacion`
- `/presentacion/recorrido`

## QA realizado en esta entrega

### Revisión estática

- Estructura de archivos revisada.
- Imports y referencias nuevas revisadas manualmente.
- Flujos existentes preservados en el código.
- Usuario predeterminado centralizado.
- Centro de Ayuda desacoplado en `src/content/help.ts`.

### Limitación del entorno

Se intentó ejecutar `npm install` en el entorno de generación, pero el acceso al registro agotó el tiempo de espera. Por ello no fue posible ejecutar `npm run typecheck`, `npm test` ni `npm run build` aquí.

En Windows, ejecutar:

```cmd
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Luego validar visualmente:

- `/presentacion`
- `/dashboard`
- `/profile`
- `/help`
- modo presentación
- selector de usuarios demo
- ayudas y tooltips
