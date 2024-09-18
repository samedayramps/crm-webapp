import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

let cachedConnection: typeof mongoose | null = null;

export async function dbConnect(): Promise<typeof mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (mongoose.connection.readyState >= 1) {
    cachedConnection = mongoose;
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(uri, options);
    return cachedConnection;
  } catch (e) {
    throw e;
  }
}