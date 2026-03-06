# AGNO - Claude Code Guide

## Project Overview

AGNO is a full-stack digital agency website with an integrated CMS/admin dashboard. It is a Turkish-language site ("Dijital Dönüşümde Güvenilir Ortağınız" = Your Reliable Partner in Digital Transformation). Built as a Next.js monorepo.

## Monorepo Structure

```
agno/
├── apps/
│   └── web/              # Single Next.js application (public site + admin)
├── package.json          # Root scripts via Turbo
├── pnpm-workspace.yaml
└── turbo.json
```

## Tech Stack

- **Framework**: Next.js 14 (App Router), React 18, TypeScript 5
- **Styling**: Tailwind CSS 3, Radix UI, Framer Motion, CVA
- **Database**: PostgreSQL (Supabase) via Prisma 6
- **Auth**: NextAuth v4 (credentials provider, JWT sessions, bcryptjs)
- **Email**: Resend
- **Images**: Cloudinary, Sharp
- **Forms**: React Hook Form + Zod
- **Build**: Turbo + pnpm workspaces

## Common Commands

Run from the **repo root** unless noted otherwise.

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all apps
pnpm lint             # Lint all apps
pnpm type-check       # TypeScript check (no emit)

# Database (delegates to apps/web)
pnpm db:push          # Push schema to database
pnpm db:generate      # Regenerate Prisma client
pnpm db:studio        # Open Prisma Studio GUI
pnpm db:seed          # Seed initial data (run from apps/web/)
```

Run from **apps/web/** for app-specific commands:

```bash
pnpm dev              # next dev
pnpm build            # next build
pnpm start            # next start
pnpm lint             # next lint
pnpm type-check       # tsc --noEmit
pnpm db:seed          # ts-node prisma/seed.ts
```

## App Router Structure (apps/web/app/)

```
app/
├── (site)/           # Public website routes
│   ├── page.tsx                  # Homepage
│   ├── hakkimizda/               # About
│   ├── hizmetler/                # Services
│   ├── referanslar/              # Portfolio
│   ├── iletisim/                 # Contact
│   ├── blog/                     # Blog
│   └── agno-design/              # Design products store
├── (admin)/          # Protected admin dashboard routes
├── admin/
│   └── login/                    # Login page
├── api/
│   ├── auth/[...nextauth]/       # NextAuth endpoint
│   ├── contact/                  # Contact form POST
│   └── contact/quick/            # Quick contact form POST
├── robots.ts                     # SEO robots
└── sitemap.ts                    # Dynamic sitemap
```

## Key Directories (apps/web/)

```
apps/web/
├── app/              # Next.js App Router
├── components/
│   ├── admin/        # Admin dashboard UI components
│   ├── layout/       # Site layout (header, footer, nav)
│   ├── sections/     # Page section components
│   └── ui/           # Reusable UI primitives (Radix-based)
├── lib/
│   ├── auth.ts       # NextAuth config
│   ├── prisma.ts     # Prisma client singleton
│   └── utils.ts      # Shared utilities (cn, etc.)
├── prisma/
│   ├── schema.prisma # Database schema
│   └── seed.ts       # Seed script
└── public/           # Static assets
```

## Database Schema (Prisma Models)

| Model | Purpose |
|---|---|
| `User` | Admin users. Roles: `SUPER_ADMIN`, `ADMIN`, `EDITOR` |
| `Service` | Business services/offerings |
| `Portfolio` | Project showcase items |
| `BlogPost` | Blog articles (MDX content) |
| `ContactMessage` | Contact form submissions. Status: `NEW`, `IN_PROGRESS`, `REPLIED`, `CLOSED` |
| `DesignProduct` | Merchandise/design products |
| `Testimonial` | Client testimonials |
| `TeamMember` | Team member profiles |
| `SiteSetting` | Key-value site config (key is unique) |

## Environment Variables

See `apps/web/.env.example`. Required:

```
DATABASE_URL              # PostgreSQL connection string
NEXTAUTH_URL              # e.g. http://localhost:3000
NEXTAUTH_SECRET           # min 32 chars
ADMIN_EMAIL               # default admin account email
ADMIN_PASSWORD_HASH       # bcryptjs hash

RESEND_API_KEY
RESEND_FROM_EMAIL         # e.g. noreply@agno.com.tr

CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

NEXT_PUBLIC_SITE_URL      # e.g. https://agno.com.tr
NEXT_PUBLIC_GA_ID         # Google Analytics ID
NEXT_PUBLIC_WHATSAPP_NUMBER
```

## Code Conventions

- **Path alias**: `@/*` maps to `apps/web/*` (e.g. `import { cn } from "@/lib/utils"`)
- **Styling**: Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- **Components**: Prefer Radix UI primitives + Tailwind. Use CVA for variant-based styles.
- **Brand colors**: Custom `agno-*` palette defined in `tailwind.config.ts`
- **Dark mode**: Class-based (`dark:` prefix)
- **Forms**: React Hook Form + Zod schema validation
- **Database**: Always use Prisma client singleton from `@/lib/prisma`
- **No test suite** is configured yet

## Default Seed Credentials

- **Email**: admin@agno.com.tr
- **Password**: agno2024!

## Notes

- The site content is in **Turkish**
- Supabase is the recommended PostgreSQL provider
- Images are hosted on **Cloudinary**; Next.js config whitelists Cloudinary and Unsplash domains
- No testing framework is set up; add tests before shipping critical features
