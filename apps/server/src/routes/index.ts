import { Hono } from "hono";
import authRoute from "./auth";
import trpcRoute from "./trpc";
import healthRoute from "./health";
import openAPIRoute from "./open-api";

const router = new Hono();

router.route("/", healthRoute);
router.route("/api/auth", authRoute);
router.route("/trpc", trpcRoute);

if (process.env.NODE_ENV !== "production") {
  router.route("/", openAPIRoute);
}

export default router;
