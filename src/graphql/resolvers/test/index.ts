import { IResolvers } from '@graphql-tools/utils';
import { maindb } from '../../../databases';
import { Test } from '../../../databases/maindb/client';

export const testResolver: IResolvers = {
  Query: {
    async test(_root: undefined, _args: undefined, _req: undefined) : Promise<Test> {
      try {
        const test = await maindb.test.findFirst();
        if (!test) throw new Error('Test not found');

        return test;
      } catch (err) {
        throw new Error(`Error in testResolver: ${err}`);
      }
    },
  },
};
