import "dotenv/config";
import { cors as honoCors } from "hono/cors";

export function cors() {
  return honoCors({
    origin: process.env.CORS_ORIGIN as string,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });
}
