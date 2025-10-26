import { auth } from "@devstack/auth";
import { Hono } from "hono";

const router = new Hono();

router.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));

export default router;
