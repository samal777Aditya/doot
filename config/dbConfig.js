import { Pool } from 'pg';

export const db = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'feedback',
  password: 'your-password',
  port: 5432,
});