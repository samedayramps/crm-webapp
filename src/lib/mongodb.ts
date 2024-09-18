import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: 10000, // Increased to 10 seconds
  socketTimeoutMS: 45000,
  maxPoolSize: 10, // Adjust based on your needs
  retryWrites: true,
  retryReads: true,
};

let cachedConnection: typeof mongoose | null = null;

export async function dbConnect(): Promise<typeof mongoose> {
  if (cachedConnection) {
    console.log('Using cached database connection');
    return cachedConnection;
  }

  if (mongoose.connection.readyState >= 1) {
    console.log('Using existing database connection');
    cachedConnection = mongoose;
    return cachedConnection;
  }

  try {
    console.log('Connecting to MongoDB...');
    cachedConnection = await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
    
    // Wait for the connection to be fully established
    await new Promise<void>((resolve) => {
      mongoose.connection.once('connected', () => {
        console.log('MongoDB connection fully established');
        resolve();
      });
    });
    
    return cachedConnection;
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }
}

// Event listeners for connection status
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

export const mongodbConnection = { dbConnect };