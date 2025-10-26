import { Hono } from "hono";

const router = new Hono();

router.get("/", (c) => c.text("OK"));

export default router;
