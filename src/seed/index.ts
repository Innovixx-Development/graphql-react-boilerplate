import { logger } from '../lib/logger';
import { seedTest } from './test';

const seed = async () => {
  seedTest();

  logger.info('DB Seed Complete');
};

seed();
