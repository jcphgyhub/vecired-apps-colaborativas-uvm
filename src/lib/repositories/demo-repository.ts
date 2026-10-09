import { exchangeProducts, historyEntries, impact, incidents, loanItems, notifications, serviceProviders } from "@/mocks/data";

const delay = <T,>(value: T, ms = 180) => new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

export const demoRepository = {
  getLoans: () => delay(loanItems),
  getLoan: (id: string) => delay(loanItems.find((x) => x.id === id) ?? null),
  getExchanges: () => delay(exchangeProducts),
  getExchange: (id: string) => delay(exchangeProducts.find((x) => x.id === id) ?? null),
  getServices: () => delay(serviceProviders),
  getService: (id: string) => delay(serviceProviders.find((x) => x.id === id) ?? null),
  getNotifications: () => delay(notifications),
  getHistory: () => delay(historyEntries),
  getImpact: () => delay(impact),
  getIncidents: () => delay(incidents),
  requestLoan: (id: string) => delay({ ok: true, id, status: "REQUESTED" as const }, 350),
  proposeExchange: (id: string) => delay({ ok: true, id, status: "PROPOSAL_RECEIVED" as const }, 350),
  requestService: (id: string) => delay({ ok: true, id, status: "PENDING" as const }, 350),
  reportIncident: (reason: string, description: string) =>
    delay({ ok: true, id: `inc-${Date.now()}`, reason, description, status: "OPEN" as const }, 350)
};
