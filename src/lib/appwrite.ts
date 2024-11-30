import { Client, Account, Databases } from 'appwrite';

if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable');
}

if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
  throw new Error('Missing NEXT_PUBLIC_APPWRITE_ENDPOINT environment variable');
}

const client = new Client()
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE_CLIENT = {
  account,
  databases,
};