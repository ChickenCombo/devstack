import "dotenv/config";
import { trpcServer } from "@hono/trpc-server";
import { createContext } from "@devstack/api/context";
import { appRouter } from "@devstack/api/routers/index";
import { auth } from "@devstack/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";
import type { AppBindings } from "./types";

const app = new Hono<AppBindings>();

app.use(
  pinoLogger({
    pino: pino(
      { level: process.env.LOG_LEVEL as string },
      (process.env.NODE_ENV as string) === "production" ? undefined : pretty()
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  })
);

app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN as string,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: (_opts, context) => {
      return createContext({ context });
    },
  })
);

app.get("/", (c) => {
  console.log(process.env.NODE_ENV);

  return c.text("OK");
});

export default app;
