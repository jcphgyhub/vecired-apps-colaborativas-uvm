import { PersonaType } from "@/types";

const labels: Record<PersonaType, string> = {
  STUDENT: "Alumno",
  TEACHER: "Docente",
  COMMUNITY: "Comunidad",
  DEMO: "Demo",
};

export function UserPersonaBadge({ personaType }: { personaType?: PersonaType }) {
  if (!personaType) return null;
  return <span className="badge badge-blue">{labels[personaType]}</span>;
}
