import configs from "@/configs/index.js";
import { NODE_ENV_ENUM } from "@/enums/env.js";
import winston from "winston";

// Define your log levels
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

// Choose different colors for each level (for dev console)
const logColors = {
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "blue",
};

// Apply colors
winston.addColors(logColors);

// Determine environment
const isProduction = configs.NODE_ENV === NODE_ENV_ENUM.PRODUCTION;

// Define format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  winston.format.colorize({ all: !isProduction }),
  winston.format.printf(
    ({ timestamp, level, message, stack }) =>
      `${timestamp} [${level}]: ${stack || message}`
  )
);
 
// File format (without colors)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ timestamp, level, message, stack }) =>
    `${timestamp} [${level}]: ${stack || message}`
  )
); 

// Create logger instance
export const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  levels: logLevels,
  format: fileFormat,
  transports: [
    // Console output
    new winston.transports.Console({format: logFormat}),

    // File outputs (for production)
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }),
  ],
});
