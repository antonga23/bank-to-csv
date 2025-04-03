import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'banks_db',
};

export async function GET(req) {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.query('SELECT * FROM banks');
  await connection.end();
  
  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
