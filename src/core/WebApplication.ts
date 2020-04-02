import express, { Application as ExpressApplication } from 'express';
import dotenv from 'dotenv';

export class WebApplication {
  private readonly express: ExpressApplication;

  constructor() {
    this.express = express();
  }

  public async setUp(): Promise<void> {
    dotenv.config();
  }

  public startListening(port: number): void {
    this.express.listen(port, () => {
      console.log(`[Applicaton] Server is running on port ${port}`);
    });
  }
}

