import { HelpArticle } from "@/types";

export const helpArticles: HelpArticle[] = [
  {
    id: "primeros-pasos", category: "Primeros pasos", title: "Cómo empezar en VeciRed",
    summary: "Elige la necesidad que quieres resolver y sigue el flujo guiado.",
    steps: ["Entra al Dashboard.", "Elige Préstamos, Intercambios o Servicios.", "Revisa los datos antes de enviar una solicitud."],
    tip: "Si estás presentando la app, utiliza el recorrido para evaluación.", relatedRoute: "/dashboard"
  },
  {
    id: "solicitar-objeto", category: "Préstamos", title: "Cómo solicitar un objeto",
    summary: "Busca un objeto disponible y registra una solicitud de préstamo.",
    steps: ["Busca por nombre o categoría.", "Revisa condición, distancia y reputación.", "Pulsa Solicitar préstamo.", "Espera la aceptación y revisa el seguimiento."],
    tip: "Devuelve el objeto en la fecha acordada y califica la experiencia.", relatedRoute: "/loans"
  },
  {
    id: "confirmar-devolucion", category: "Devoluciones", title: "Cómo confirmar una devolución",
    summary: "Cierra correctamente un préstamo cuando el objeto regresa a su propietario.",
    steps: ["Abre la operación activa.", "Revisa la fecha acordada.", "Confirma la devolución.", "Califica la experiencia."],
    relatedRoute: "/history"
  },
  {
    id: "proponer-intercambio", category: "Intercambios", title: "Cómo proponer un intercambio",
    summary: "Ofrece un producto propio por otro que te interesa.",
    steps: ["Abre el producto publicado.", "Revisa qué busca la otra persona.", "Selecciona lo que ofreces.", "Agrega un mensaje breve y envía la propuesta."],
    relatedRoute: "/exchanges"
  },
  {
    id: "elegir-prestador", category: "Servicios locales", title: "Cómo elegir un prestador",
    summary: "Compara información antes de solicitar un servicio local.",
    steps: ["Selecciona el servicio.", "Revisa zona y disponibilidad.", "Consulta trabajos completados y evaluaciones.", "Describe tu necesidad y solicita el servicio."],
    relatedRoute: "/services"
  },
  {
    id: "reputacion", category: "Reputación", title: "Cómo funciona la reputación",
    summary: "La reputación resume evaluaciones e historial demo dentro de VeciRed.",
    steps: ["Consulta la calificación promedio.", "Revisa operaciones completadas.", "Observa incidencias abiertas si existen."],
    tip: "La reputación del prototipo no es una certificación oficial de identidad.", relatedRoute: "/profile"
  },
  {
    id: "seguridad", category: "Seguridad", title: "Cómo cuidar un objeto prestado",
    summary: "Usa el recurso con responsabilidad y conserva las condiciones acordadas.",
    steps: ["Revisa la condición antes de recibirlo.", "Respeta el uso acordado.", "Devuélvelo a tiempo.", "Reporta un problema si ocurre una incidencia."],
    relatedRoute: "/loans"
  },
  {
    id: "reportar", category: "Reportes e incidencias", title: "Cómo reportar un problema",
    summary: "Registra una incidencia asociada a una operación.",
    steps: ["Abre la operación.", "Selecciona Reportar problema.", "Elige el motivo.", "Describe lo ocurrido y envía."],
    relatedRoute: "/incidents"
  },
  {
    id: "incidencia", category: "Reportes e incidencias", title: "Qué significa una incidencia",
    summary: "Una incidencia permite dar seguimiento a un problema registrado en una operación.",
    steps: ["OPEN: reporte registrado.", "IN_REVIEW: revisión en proceso.", "RESOLVED: problema resuelto.", "CLOSED: seguimiento cerrado."],
    relatedRoute: "/incidents"
  },
  {
    id: "cambiar-usuario", category: "Perfil y cuenta", title: "Cómo cambiar usuario demo",
    summary: "El prototipo permite revisar la interfaz con diferentes perfiles demo.",
    steps: ["Abre Perfil.", "Localiza Cambiar usuario demo.", "Selecciona Juan Carlos, Alba o María."],
    tip: "Al recargar, el prototipo vuelve al usuario predeterminado definido para la presentación.", relatedRoute: "/profile"
  },
  {
    id: "economia-colaborativa", category: "Economía colaborativa", title: "Qué es economía colaborativa",
    summary: "VeciRed conecta necesidades con recursos, productos y capacidades que ya existen en la comunidad.",
    steps: ["Busca antes de comprar.", "Comparte o intercambia recursos existentes.", "Consulta servicios locales.", "Conserva valor durante más tiempo."],
    tip: "Principio de VeciRed: utilizar en lugar de poseer.", relatedRoute: "/impact"
  },
  {
    id: "modo-presentacion", category: "Modo presentación", title: "Cómo usar el modo presentación",
    summary: "Activa un recorrido ligero para mostrar la app durante la evaluación.",
    steps: ["Abre Presentación.", "Selecciona Recorrido para evaluación.", "Usa Anterior y Siguiente para avanzar.", "Pulsa Salir del recorrido cuando termines."],
    relatedRoute: "/presentacion/recorrido"
  }
];

export const helpCategories = Array.from(new Set(helpArticles.map(article => article.category)));
