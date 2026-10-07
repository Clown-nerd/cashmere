# Cashmere Events

A responsive website and web application for Cashmere Events — luxury wedding and event styling studio based in Nairobi, Kenya.

## Scripts

- `pnpm dev`: Development server; honors `PORT` (default 3000).
- `pnpm build` / `pnpm start`: Build and serve production bundle (`dist/index.js` and `dist/public/`).
- `pnpm db:migrate`: Apply database migrations.
- `pnpm db:push`: Generate and apply schema changes.
- `pnpm check`: Run TypeScript typechecks.
- `pnpm test`: Run application test suite.

## Architecture

- **Frontend**: React 19, Tailwind CSS v4, Framer Motion, Lucide icons, TanStack Query, tRPC Client, Wouter routing.
- **Backend**: Node.js, Express, tRPC Server.
- **Database**: Drizzle ORM with MySQL/TiDB.
- **Static Assets**: Stored in `client/public/assets/`.
