import { PrismaClient as MainDBPrismaClient } from './maindb/client';

export const maindb = new MainDBPrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
  errorFormat: 'minimal',
});
