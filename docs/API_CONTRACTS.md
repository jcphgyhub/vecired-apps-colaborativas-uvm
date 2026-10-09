# Contratos previstos para Spring Boot

La UI utiliza repositorios para desacoplar presentación y transporte.

## Loans
- `GET /api/loans/items`
- `GET /api/loans/items/{id}`
- `POST /api/loans/items`
- `POST /api/loans/requests`
- `PATCH /api/loans/requests/{id}/accept`
- `PATCH /api/loans/requests/{id}/reject`
- `PATCH /api/loans/{id}/delivered`
- `PATCH /api/loans/{id}/returned`
- `PATCH /api/loans/{id}/complete`

## Exchanges
- `GET /api/exchanges/products`
- `GET /api/exchanges/products/{id}`
- `POST /api/exchanges/products`
- `POST /api/exchanges/proposals`
- `PATCH /api/exchanges/proposals/{id}/accept`
- `PATCH /api/exchanges/proposals/{id}/reject`
- `PATCH /api/exchanges/{id}/complete`

## Services
- `GET /api/services/providers`
- `GET /api/services/providers/{id}`
- `POST /api/services/requests`
- `PATCH /api/services/requests/{id}/accept`
- `PATCH /api/services/requests/{id}/reject`
- `PATCH /api/services/requests/{id}/complete`

## Incidents
- `POST /api/incidents`
- `GET /api/incidents/{id}`
- `GET /api/incidents/me`

## Help
- `GET /api/help/articles`
- `GET /api/help/articles/{slug}`
