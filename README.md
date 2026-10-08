# Sam's Mobile Tyres — Website

## Technology

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router, server-rendered)
- [Vite](https://vite.dev/) build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Supabase](https://supabase.com/) for backend/auth integration
- TypeScript throughout

## Install dependencies

This project uses [Bun](https://bun.sh/) (a `bun.lock` lockfile is included). npm also works.

```bash
bun install
# or
npm install
```

## Run locally

```bash
bun run dev
# or
npm run dev
```

The site will be available at the local URL printed in the terminal.

## Build for production

```bash
bun run build
# or
npm run build
```

Other useful scripts:

- `npm run lint` — run ESLint
- `npm run format` — run Prettier
- `npm run check:seo` — validate location/guide page data and sitemap consistency

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `SUPABASE_PROJECT_ID` / `VITE_SUPABASE_PROJECT_ID` | Supabase project reference ID |
| `SUPABASE_PUBLISHABLE_KEY` / `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable API key |
| `SUPABASE_URL` / `VITE_SUPABASE_URL` | Supabase project URL |

These values can be found in the Supabase project dashboard under **Project Settings → API**.

## Deployment

The project is configured for deployment on [Vercel](https://vercel.com/) (see `vercel.json`) and includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on push to `main`. The workflow requires the following repository secrets to be configured in GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The build can also be deployed to any Node-compatible host by running `npm run build` and serving the generated `.output` directory.
