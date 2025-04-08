import express, { Request, Response } from 'express';
import 'dotenv/config';
import { connectPrisma, disconnectPrisma } from './db';

const PORT = process.env.PORT || 5000;
const app = express();

async function startApp() {
  // Call any other startup logic here, but keep the Prisma connection clean.
  await connectPrisma();

  // You can add more logic here as needed for your app initialization

  // Properly handle disconnection on exit
  process.on('exit', async () => {
    await disconnectPrisma();
  });

  // Handle process termination signals
  process.on('SIGINT', async () => {
    await disconnectPrisma();
    process.exit(0);
  });
  process.on('SIGTERM', async () => {
    await disconnectPrisma();
    process.exit(0);
  });
}

startApp().catch((e) => {
  console.error(e);
  process.exit(1);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
