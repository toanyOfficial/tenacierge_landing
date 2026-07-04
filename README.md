# Tenacierge Landing

Bun + Express 기반의 정적 랜딩페이지와 얇은 MySQL 조회 API 리포지토리입니다.

## Architecture

- Runtime: Bun
- Server: Express
- Static files: `public/`
- Landing page: `public/index.html`
- Styles: `public/styles.css`
- Browser scripts: `public/script.js`, `public/data.js`
- Database module: `lib/db.js`
- Utility scripts: `scripts/`
- Database client: `mysql2/promise`

## Environment

Copy `.env.example` to `.env` in the runtime environment and set real values there. Do not commit `.env`.

```env
PORT=3000
DB_HOST=127.0.0.1
DB_USER=example_user
DB_PASSWORD=example_password
DB_PORT=3306
DB_NAME=example_database
NODE_ENV=production
DATA_API_DEBUG=false
```

## Scripts

```bash
bun install
npm run build
npm run dev
npm run db:health
npm run data:query
```

## API

- `GET /api/health` returns service health.
- `GET /api/db-health` checks MySQL connectivity.
- `GET /api/data?limit=20` reads `id` and `name` from `some_table`.

## Deployment

This app is designed to run behind Caddy.

The app itself listens on `PORT` and serves static files plus a small set of `/api/*` routes.

Example Caddyfile:

```caddyfile
tenacierge.example.com {
  encode zstd gzip
  reverse_proxy 127.0.0.1:3000
}
```
