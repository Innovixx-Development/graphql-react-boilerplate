import { maindb } from '../../databases';
import { logger } from '../../lib/logger';

export const seedTest = async () => {
  await maindb.test.create({
    data: {
      text: 'Hello World',
    },
  });

  logger.info('Seeded Test');
};
