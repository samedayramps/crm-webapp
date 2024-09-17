import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use a module-level variable instead of a global
let _mongoClientPromise: Promise<MongoClient> | undefined;

if (process.env.NODE_ENV === 'development') {
  if (!_mongoClientPromise) {
    client = new MongoClient(uri);
    _mongoClientPromise = client.connect();
  }
  clientPromise = _mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// Cached connection for mongoose
let cachedConnection: typeof mongoose | null = null;

export async function dbConnect(): Promise<void> {
  if (cachedConnection) {
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    cachedConnection = mongoose;
    return;
  }

  try {
    cachedConnection = await mongoose.connect(uri, options);
  } catch (e) {
    throw e;
  }
}