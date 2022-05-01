export interface AppConfiguration {
  port: number;
  databaseUrl: string;
  firebase: {
    projectId: string;
    clientEmail: string;
    privateKey: string;
  };
}

export default (): AppConfiguration => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  databaseUrl:
    process.env.DATABASE_URL || 'mongodb://localhost:27017/keep-clone-nestjs',
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    privateKey: process.env.FIREBASE_PRIVATE_KEY || '',
  },
});
