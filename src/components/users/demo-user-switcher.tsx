"use client";

import { demoUsers } from "@/mocks/data";
import { useUIStore } from "@/stores/ui-store";

export function DemoUserSwitcher() {
  const { currentDemoUserId, setCurrentDemoUserId } = useUIStore();
  const selectable = demoUsers.filter(user => ["u-juan-carlos", "u-alba", "u-maria"].includes(user.id));
  return (
    <div>
      <label htmlFor="demo-user" className="label">Cambiar usuario demo</label>
      <select id="demo-user" className="input" value={currentDemoUserId} onChange={event => setCurrentDemoUserId(event.target.value)}>
        {selectable.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
      <p className="mt-2 text-xs muted">El cambio solo afecta la demostración local del prototipo.</p>
    </div>
  );
}
