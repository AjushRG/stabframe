import dayjs from "dayjs";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

const log = {
  info: (message: string) => {
    logger.info({
      timestamp: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
      level: "info",
      message,
    });
  },
  error: (message: any) => {
    logger.error({
      timestamp: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
      level: "error",
      message,
    });
  },
};

export default log;
