import { trpcServer } from "@hono/trpc-server";
import { createContext } from "@devstack/api/context";
import { appRouter } from "@devstack/api/routers/index";
import { Hono } from "hono";

const router = new Hono();

router.use(
  "/*",
  trpcServer({
    router: appRouter,
    createContext: (_opts, context) => createContext({ context }),
  })
);

export default router;
