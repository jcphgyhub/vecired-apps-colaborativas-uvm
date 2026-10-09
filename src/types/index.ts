export type OperationStatus =
  | "AVAILABLE" | "REQUESTED" | "ACCEPTED" | "DELIVERED" | "BORROWED"
  | "RETURNED" | "COMPLETED" | "REJECTED" | "CANCELLED" | "INCIDENT_REPORTED"
  | "PUBLISHED" | "PROPOSAL_RECEIVED" | "AGREED" | "PENDING" | "IN_PROGRESS";

export type PersonaType = "STUDENT" | "TEACHER" | "COMMUNITY" | "DEMO";

export type User = {
  id: string;
  name: string;
  role: "USER" | "PROVIDER" | "ADMIN";
  personaType?: PersonaType;
  zone: string;
  avatar: string;
  rating: number;
  reviews: number;
  completedOperations: number;
  openIncidents: number;
};

export type LoanItem = {
  id: string; name: string; description: string; category: string; image: string;
  zone: string; distanceKm: number; availability: string; condition: string;
  priceLabel: string; owner: User; rating: number; status: OperationStatus;
};

export type ExchangeProduct = {
  id: string; name: string; description: string; category: string; image: string;
  zone: string; distanceKm: number; condition: string; seeks: string;
  owner: User; rating: number; status: OperationStatus;
};

export type ServiceProvider = {
  id: string; name: string; service: string; description: string; zone: string;
  distanceKm: number; availability: string; priceLabel: string; rating: number;
  reviews: number; image: string; completedJobs: number; openIncidents: number;
};

export type Notification = { id: string; title: string; body: string; read: boolean; };
export type HistoryEntry = {
  id: string; type: "Préstamo" | "Intercambio" | "Servicio";
  title: string; counterpart: string; date: string; status: string;
};
export type CircularImpact = {
  reusedObjects: number; loansCompleted: number; exchangesCompleted: number;
  purchasesAvoided: number; sharedResources: number; localServices: number;
};
export type Incident = {
  id: string; reason: string; description: string;
  status: "OPEN" | "IN_REVIEW" | "RESOLVED" | "CLOSED"; date: string;
};

export type HelpArticle = {
  id: string;
  category: string;
  title: string;
  summary: string;
  steps: string[];
  tip?: string;
  relatedRoute?: string;
};
