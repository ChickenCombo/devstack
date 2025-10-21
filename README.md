# ✨ DevStack

An opinionated full-stack monorepo setup built with my preferred technologies — designed for speed, scalability, and developer experience, bootstrapped with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack).

## 🚀 Features

### 🌐 Frontend

- **Next.js** - React framework for hybrid rendering
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **TanStack Query** - Powerful asynchronous state management for React
- **Better Auth (client-side)** - The most comprehensive authentication framework for TypeScript

### 💻 Backend

- **Hono** - Ultrafast web framework
- **tRPC** - End-to-end type-safe APIs
- **Drizzle** - TypeScript-first ORM
- **PostgreSQL** - Advanced SQL database
- **Better Auth (server-side)** - The most comprehensive authentication framework for TypeScript

### 🛠️ Tooling

- **TypeScript** - For type safety and improved developer experience
- **Bun** - Fast JavaScript runtime & toolkit
- **Turborepo** - High-performance build system
- **Docker** - Containerization for consistent environments

## 🏁 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ChickenCombo/devstack.git
```

2. Navigate into the project directory:

```bash
cd devstack
```

3. Install dependencies:

```bash
bun install
```

## ⚙️ Project Setup

This project uses PostgreSQL with Drizzle ORM.

1. Update your `apps/server/.env` and `apps/web/.env` files with your own environment configuration

> [!TIP]  
> You can use `apps/server/.env.example` and `apps/web/.env.example` as a template for your own `.env` files.

2. Apply the schema to your database:

```bash
bun db:push
```

3. Run the development server:

```bash
bun dev
```

> [!NOTE]
> Web URL: [http://localhost:3001](http://localhost:3001)  
> API URL: [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
devstack/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Hono, TRPC)
├── packages/
│   ├── api/         # API layer / business logic
│   ├── auth/        # Authentication configuration & logic
│   └── db/          # Database schema & queries
```

## 📜 Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all apps
- `bun db:push`: Push schema changes to database
- `bun db:studio`: Open database studio UI
