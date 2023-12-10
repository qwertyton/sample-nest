import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.DATABASE_URL || '',
  user: process.env.DATABASE_USER || '',
  pass: process.env.DATABASE_PASS || '',
  dbName:process.env.DATABASE_NAME || '',
}));