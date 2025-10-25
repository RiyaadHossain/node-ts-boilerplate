import { Server } from 'http';

import { gracefulShutdown } from './gracefulShutdown.js';

import { logger } from '@/utils/logger.js';

export function regProcessHandlers(server: Server) {
  ['SIGINT', 'SIGTERM'].forEach((signal) =>
    process.on(signal, () => gracefulShutdown(server, signal)),
  );

  process.on('uncaughtException', (err) => {
    logger.error('💥 Uncaught Exception:', err);
    gracefulShutdown(server, 'uncaughtException');
  });

  process.on('unhandledRejection', (reason) => {
    logger.error('🚨 Unhandled Rejection:', reason);
    gracefulShutdown(server, 'unhandledRejection');
  });
}
