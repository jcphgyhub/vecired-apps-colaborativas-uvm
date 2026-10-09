import { describe, expect, it } from "vitest";
import { demoRepository } from "./demo-repository";

describe("demoRepository", () => {
  it("encuentra el taladro demo", async () => {
    const item = await demoRepository.getLoan("loan-taladro");
    expect(item?.name).toContain("Taladro");
  });

  it("crea una solicitud demo", async () => {
    const result = await demoRepository.requestLoan("loan-taladro");
    expect(result.status).toBe("REQUESTED");
  });

  it("crea un reporte de incidencia", async () => {
    const result = await demoRepository.reportIncident("Objeto no devuelto", "Prueba");
    expect(result.status).toBe("OPEN");
  });
});
