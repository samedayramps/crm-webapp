import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export const rateLimit = (limit: number, interval: number) => {
  return {
    check: (req: NextRequest, identifier: string) => {
      const now = Date.now();
      const key = `${identifier}_${req.ip}`;

      if (store[key] && now < store[key].resetTime) {
        store[key].count++;
        return store[key].count <= limit;
      } else {
        store[key] = {
          count: 1,
          resetTime: now + interval,
        };
        return true;
      }
    },
  };
};