// prismaClient.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to start the Prisma client connection and handle disconnection
const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

const disconnectPrisma = async () => {
  try {
    await prisma.$disconnect();
    console.log('Disconnected from the database successfully.');
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
  }
};

export { connectPrisma, disconnectPrisma };
