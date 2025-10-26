import type { AppBindings } from "@/types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";

const router = new OpenAPIHono<AppBindings>();

router.doc("/docs", {
  openapi: "3.0.00",
  info: {
    version: "1.0.0",
    title: "DevStack API",
    description: "API documentation for DevStack",
  },
});

router.get(
  "/reference",
  Scalar({
    url: "/docs",
    theme: "alternate",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch",
    },
  })
);

export default router;
