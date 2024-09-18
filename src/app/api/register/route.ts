import { createApiHandler } from '@/lib/apiHandler';
import { clientPromise } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export const POST = createApiHandler<{ message: string; userId: string }>(async (request) => {
  const { username, email, password } = await request.json();

  if (!username || !email || !password) {
    throw new Error('Missing required fields');
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error('Username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection('users').insertOne({
    username,
    email,
    password: hashedPassword,
  });

  return { 
    data: { 
      message: 'User registered successfully', 
      userId: result.insertedId.toString() 
    } 
  };
});