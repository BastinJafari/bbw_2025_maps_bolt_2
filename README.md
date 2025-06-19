<div align="center"><strong>Next.js 15 Hackathon Starter</strong></div>
<div align="center">Built with the Next.js App Router, Tailwind CSS, and Drizzle</div>
<br />

## Overview

This is a starter template for your next hackathon project, using the following stack:

- Framework - [Next.js (App Router)](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Auth.js](https://authjs.dev)
- Database - [Postgres](https://vercel.com/postgres)
- ORM - [Drizzle](https://orm.drizzle.team/)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started for Local Development

These instructions will guide you through setting up the project to run on your local machine with a local PostgreSQL database.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or later)
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/) installed and running.

### 1. Clone the Repository and Install Dependencies

You can clone this repository to get started. If you are in a Bolt session, it will be cloned for you.

```bash
git clone https://github.com/your-username/your-repo-name.git # <-- IMPORTANT: Change this to your repo URL
cd your-repo-name
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Then, open `.env` and add your specific credentials.

### 3. Create the Database

Connect to your local PostgreSQL instance using a client like `psql` and create the database you specified in your `POSTGRES_URL`.

```sql
CREATE DATABASE your_database_name;
```

### 4. Run Database Migrations

This project uses `drizzle-kit` to manage database schema migrations.

- To generate a new migration file after making changes to the schema in `lib/schema.ts`:
  ```bash
  pnpm drizzle-kit generate
  ```

- To apply all pending migrations to your database:
  ```bash
  pnpm drizzle-kit migrate
  ```

Since the template starts with an empty schema, you don't need to run migrations initially. Once you define your tables in `lib/schema.ts`, you can generate and apply your first migration.

### 5. Run the Development Server

```bash
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
