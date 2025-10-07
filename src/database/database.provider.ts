import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect('mongodb://localhost/MongoDBLocal');
        console.log('Conecction OK');
        return connection;
      } catch (error) {
        console.error('Error connecting:', error);
        throw error;
      }
    },
  },
];
