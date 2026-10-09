export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "VeciRed",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080",
  useMocks: process.env.NEXT_PUBLIC_USE_MOCKS !== "false"
};
