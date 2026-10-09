import { CircularImpact, ExchangeProduct, HistoryEntry, Incident, LoanItem, Notification, ServiceProvider, User } from "@/types";

export const DEFAULT_DEMO_USER_ID = "u-juan-carlos";

export const demoUsers: User[] = [
  {
    id: "u-juan-carlos", name: "Juan Carlos Perez Hernández", role: "USER", personaType: "STUDENT",
    zone: "San Miguel Tecamachalco", avatar: "/avatars/juan-carlos.svg",
    rating: 4.8, reviews: 12, completedOperations: 10, openIncidents: 0
  },
  {
    id: "u-alba", name: "Alba Pulido Pineda", role: "USER", personaType: "TEACHER",
    zone: "San Miguel Tecamachalco", avatar: "/avatars/alba.svg",
    rating: 4.9, reviews: 8, completedOperations: 6, openIncidents: 0
  },
  {
    id: "u-maria", name: "María Hernández", role: "USER", personaType: "DEMO",
    zone: "San Miguel Tecamachalco", avatar: "/avatars/maria.svg",
    rating: 4.8, reviews: 19, completedOperations: 12, openIncidents: 0
  },
  {
    id: "u-carlos", name: "Carlos Mendoza", role: "USER", personaType: "COMMUNITY",
    zone: "San Miguel Tecamachalco", avatar: "/avatars/carlos.svg",
    rating: 4.9, reviews: 32, completedOperations: 27, openIncidents: 0
  },
  {
    id: "u-laura", name: "Laura Gómez", role: "USER", personaType: "COMMUNITY",
    zone: "San Miguel Tecamachalco", avatar: "/avatars/laura.svg",
    rating: 4.7, reviews: 14, completedOperations: 18, openIncidents: 0
  }
];

export const getDemoUserById = (id: string) => demoUsers.find(user => user.id === id) ?? demoUsers[0];
export const defaultDemoUser = getDemoUserById(DEFAULT_DEMO_USER_ID);
// Alias conservado por compatibilidad con código previo.
export const demoUser = defaultDemoUser;

const carlos = getDemoUserById("u-carlos");
const laura = getDemoUserById("u-laura");

export const loanItems: LoanItem[] = [
  { id:"loan-taladro", name:"Taladro inalámbrico 20V", description:"Taladro compacto para reparaciones domésticas. Incluye cargador y dos brocas.", category:"Herramientas", image:"/items/taladro.svg", zone:"San Miguel Tecamachalco", distanceKm:.8, availability:"Disponible hoy", condition:"Muy buen estado", priceLabel:"Préstamo comunitario", owner:carlos, rating:4.9, status:"AVAILABLE" },
  { id:"loan-escalera", name:"Escalera de aluminio", description:"Escalera plegable de 6 peldaños para tareas del hogar.", category:"Herramientas", image:"/items/escalera.svg", zone:"San Miguel Tecamachalco", distanceKm:1.1, availability:"Disponible mañana", condition:"Buen estado", priceLabel:"Préstamo comunitario", owner:laura, rating:4.7, status:"AVAILABLE" },
  { id:"loan-llaves", name:"Juego de llaves", description:"Juego básico de llaves combinadas.", category:"Herramientas", image:"/items/llaves.svg", zone:"San Miguel Tecamachalco", distanceKm:1.4, availability:"Disponible hoy", condition:"Buen estado", priceLabel:"Préstamo comunitario", owner:carlos, rating:4.8, status:"AVAILABLE" },
  { id:"loan-podadora", name:"Podadora eléctrica", description:"Ideal para jardín pequeño o mediano.", category:"Jardinería", image:"/items/podadora.svg", zone:"Tecamachalco", distanceKm:2.2, availability:"Fin de semana", condition:"Muy buen estado", priceLabel:"Préstamo comunitario", owner:laura, rating:4.6, status:"AVAILABLE" },
  { id:"loan-bocina", name:"Bocina portátil", description:"Bocina recargable para reuniones pequeñas.", category:"Eventos", image:"/items/bocina.svg", zone:"San Miguel Tecamachalco", distanceKm:1.7, availability:"Disponible hoy", condition:"Buen estado", priceLabel:"Préstamo comunitario", owner:carlos, rating:4.9, status:"AVAILABLE" },
  { id:"loan-mesa", name:"Mesa plegable", description:"Mesa rectangular para reuniones o actividades.", category:"Eventos", image:"/items/mesa.svg", zone:"San Miguel Tecamachalco", distanceKm:.6, availability:"Disponible hoy", condition:"Buen estado", priceLabel:"Préstamo comunitario", owner:laura, rating:4.8, status:"AVAILABLE" },
  { id:"loan-bici", name:"Bicicleta urbana", description:"Bicicleta rodada 26 para trayectos cortos.", category:"Deporte", image:"/items/bicicleta.svg", zone:"Tecamachalco", distanceKm:2.5, availability:"Sábado y domingo", condition:"Buen estado", priceLabel:"Préstamo comunitario", owner:carlos, rating:4.9, status:"AVAILABLE" },
  { id:"loan-carpa", name:"Carpa para 4 personas", description:"Carpa compacta para camping de fin de semana.", category:"Outdoor", image:"/items/carpa.svg", zone:"San Miguel Tecamachalco", distanceKm:1.9, availability:"Disponible viernes", condition:"Muy buen estado", priceLabel:"Préstamo comunitario", owner:laura, rating:4.7, status:"AVAILABLE" }
];

export const exchangeProducts: ExchangeProduct[] = [
  { id:"ex-cafetera", name:"Cafetera de 12 tazas", description:"Funciona correctamente. La cambio porque ya no la uso.", category:"Hogar", image:"/items/cafetera.svg", zone:"San Miguel Tecamachalco", distanceKm:1.0, condition:"Buen estado", seeks:"Herramienta doméstica", owner:laura, rating:4.7, status:"PUBLISHED" },
  { id:"ex-licuadora", name:"Licuadora", description:"Licuadora funcional de vaso de vidrio.", category:"Hogar", image:"/items/licuadora.svg", zone:"Tecamachalco", distanceKm:1.7, condition:"Buen estado", seeks:"Libro o lámpara", owner:carlos, rating:4.9, status:"PUBLISHED" },
  { id:"ex-libro", name:"Colección de libros", description:"Tres libros de divulgación científica.", category:"Libros", image:"/items/libro.svg", zone:"San Miguel Tecamachalco", distanceKm:.9, condition:"Muy buen estado", seeks:"Mochila", owner:laura, rating:4.8, status:"PUBLISHED" },
  { id:"ex-lampara", name:"Lámpara de escritorio", description:"LED con brazo ajustable.", category:"Hogar", image:"/items/lampara.svg", zone:"San Miguel Tecamachalco", distanceKm:1.3, condition:"Muy buen estado", seeks:"Libro", owner:carlos, rating:4.9, status:"PUBLISHED" }
];

export const serviceProviders: ServiceProvider[] = [
  { id:"svc-electricista", name:"José Ramírez", service:"Electricista", description:"Instalaciones, contactos, luminarias y revisión básica.", zone:"San Miguel Tecamachalco", distanceKm:.9, availability:"Hoy", priceLabel:"Cotización directa", rating:4.8, reviews:41, image:"/services/electricista.svg", completedJobs:46, openIncidents:0 },
  { id:"svc-plomero", name:"Ricardo Torres", service:"Plomería", description:"Fugas, llaves, lavabo y mantenimiento doméstico.", zone:"San Miguel Tecamachalco", distanceKm:1.4, availability:"Mañana", priceLabel:"Cotización directa", rating:4.7, reviews:29, image:"/services/plomero.svg", completedJobs:31, openIncidents:0 },
  { id:"svc-carpintera", name:"Elena Ruiz", service:"Carpintería", description:"Ajustes, reparaciones y trabajos pequeños en madera.", zone:"Tecamachalco", distanceKm:2.0, availability:"Esta semana", priceLabel:"Cotización directa", rating:4.9, reviews:22, image:"/services/carpinteria.svg", completedJobs:24, openIncidents:0 },
  { id:"svc-jardinero", name:"Miguel Santos", service:"Jardinería", description:"Poda, mantenimiento y limpieza de jardín.", zone:"San Miguel Tecamachalco", distanceKm:1.1, availability:"Hoy", priceLabel:"Cotización directa", rating:4.6, reviews:18, image:"/services/jardineria.svg", completedJobs:21, openIncidents:0 }
];

export const notifications: Notification[] = [
  { id:"n1", title:"Préstamo aceptado", body:"Carlos aceptó tu solicitud del taladro.", read:false },
  { id:"n2", title:"Devuelve a tiempo", body:"El taladro debe devolverse mañana a las 18:00.", read:false },
  { id:"n3", title:"Nueva propuesta", body:"Recibiste una propuesta por tu lámpara.", read:false },
  { id:"n4", title:"Servicio finalizado", body:"Ya puedes calificar tu servicio de electricidad.", read:true },
  { id:"n5", title:"Impacto de la comunidad", body:"Este mes se reutilizaron 27 objetos.", read:true }
];

export const historyEntries: HistoryEntry[] = [
  { id:"h1", type:"Préstamo", title:"Taladro inalámbrico 20V", counterpart:"Carlos Mendoza", date:"02/10/2026", status:"En curso" },
  { id:"h2", type:"Servicio", title:"Electricidad", counterpart:"José Ramírez", date:"28/09/2026", status:"Completado" },
  { id:"h3", type:"Intercambio", title:"Lámpara de escritorio", counterpart:"Laura Gómez", date:"25/09/2026", status:"Completado" },
  { id:"h4", type:"Préstamo", title:"Escalera de aluminio", counterpart:"Laura Gómez", date:"20/09/2026", status:"Completado" },
  { id:"h5", type:"Préstamo", title:"Mesa plegable", counterpart:"Laura Gómez", date:"11/09/2026", status:"Completado" },
  { id:"h6", type:"Servicio", title:"Plomería", counterpart:"Ricardo Torres", date:"03/09/2026", status:"Completado" },
  { id:"h7", type:"Intercambio", title:"Libros", counterpart:"Carlos Mendoza", date:"26/08/2026", status:"Completado" }
];

export const impact: CircularImpact = {
  reusedObjects:27, loansCompleted:18, exchangesCompleted:9,
  purchasesAvoided:14, sharedResources:33, localServices:12
};

export const incidents: Incident[] = [
  { id:"inc-1", reason:"Objeto dañado", description:"Demo de incidencia resuelta para mostrar el flujo.", status:"RESOLVED", date:"18/08/2026" }
];
