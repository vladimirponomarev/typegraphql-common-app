import 'reflect-metadata';
import dotenv from 'dotenv';
import path from 'path';
import express, { Application as ExpressApplication } from 'express';
import { buildSchema as buildGraphQlSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { ProfileResolver } from "../resolvers/user/ProfileResolver";

export class WebApplication {
  private readonly express: ExpressApplication;

  constructor() {
    this.express = express();
  }

  public async setUp(): Promise<void> {
    dotenv.config();
    this.setUpGraphQlServer();
  }

  public startListening(port: number): void {
    this.express.listen(port, () => {
      console.log(`[Applicaton] Server is running on port ${port}`);
    });
  }

  private async setUpGraphQlServer() {
    const createSchema = () => buildGraphQlSchema({
      resolvers: [path.join(__dirname, '../resolvers/*/*.ts')],
    });

    const schema = await buildGraphQlSchema({
      resolvers: [ProfileResolver],
    });
    const apolloServer = new ApolloServer({
      schema
    });
    apolloServer.applyMiddleware({
      app: this.express
    });
  }
}

