import { OpenAPIHono } from "@hono/zod-openapi";
import type { AppBindings } from "./types";
import { logger } from "./lib/pino-logger";
import { cors } from "./lib/cors";
import router from "./routes";

const app = new OpenAPIHono<AppBindings>();

app.use(logger());
app.use(cors());

app.route("/", router);

export default app;
