import "dotenv/config";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

export function logger() {
  return pinoLogger({
    pino: pino(
      { level: process.env.LOG_LEVEL as string },
      (process.env.NODE_ENV as string) === "production" ? undefined : pretty()
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
