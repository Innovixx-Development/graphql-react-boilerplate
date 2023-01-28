import { config as dotenv } from 'dotenv';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import helmet from 'helmet';
import { logger } from './lib/logger';
import { typeDefs, resolvers } from './graphql';

dotenv({
  path: path.resolve(__dirname, '../.env'),
});

const isDev = process.env.NODE_ENV === 'development';

const mount = async (server: Application) => {
  try {
    const corsOrigin = isDev ? [`${process.env.CLIENT_URL}`, 'https://studio.apollographql.com'] : process.env.CLIENT_URL;

    server.use(cookieParser(process.env.SECRET));
    server.use(express.json({ limit: '10mb' }));
    server.use(cors({
      origin: corsOrigin,
      credentials: true,
    }));
    server.use(helmet());

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await apolloServer.start();

    if (!isDev) {
      server.use(express.static(path.resolve(__dirname, '../client/dist')));

      server.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
      });
    }

    server.use(
      '/api',
      cors<cors.CorsRequest>(),
      expressMiddleware(apolloServer, {
        context: async ({ req }) => ({ token: req.headers.token }),
      }),
    );

    server.listen(process.env.PORT, () => {
      logger.info(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    logger.error(err);
  }
};

mount(express());
