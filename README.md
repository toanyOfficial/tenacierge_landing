# Tenacierge Landing

Next.js App Router 기반의 컨시어지강남 랜딩페이지와 MySQL 조회 API 리포지토리입니다.

## Architecture

- Runtime: Bun + Next.js
- App Router: `app/`
- Components: `components/`
- Static assets: `public/`
- Database module: `lib/db.js`
- Utility scripts: `scripts/`
- Database client: `mysql2/promise`

## Environment

Copy `.env.example` to `.env` in the runtime environment and set real values there. Do not commit `.env`.

```env
PORT=3300
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
bun run dev
bun run build
PORT=3300 bun run start
bun run db:health
bun run data:query
```

## Routes

- `GET /` renders the landing page.
- `GET /data` renders a small API result viewer.
- `GET /api/health` returns service health.
- `GET /api/db-health` checks MySQL connectivity.
- `GET /api/results-summary` returns `totalCount` from `tenaCierge.order_header` and `items: []`.
- `GET /api/data` returns `totalCount` from `tenaCierge.order_header` and `items: []`.

## Deployment

The project is intended for `runtime=nextjs_bun` style deployment. `bun run build` must generate `.next`, and `PORT=3300 bun run start` should run the Next.js server using the provided `PORT` environment variable.
