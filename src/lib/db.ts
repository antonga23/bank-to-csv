import mysql from 'mysql2/promise';

// Define types
export interface Bank {
  id: number;
  country: string;
  bank_name: string;
}

export interface BanksByCountry {
  [country: string]: Bank[];
}

// Database configuration using environment variables
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'banks_db', 
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306, // Convert to number
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

export async function getBanksByCountry(): Promise<BanksByCountry> {
  try {
    const [rows] = await pool.query('SELECT * FROM banks ORDER BY country, bank_name') as [Bank[], mysql.FieldPacket[]];
    
    // Group banks by country
    const banksByCountry = rows.reduce((acc: BanksByCountry, bank: Bank) => {
      if (!acc[bank.country]) {
        acc[bank.country] = [];
      }
      acc[bank.country].push(bank);
      return acc;
    }, {});

    return banksByCountry;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch banks');
  }
}

export const db = {
  getBanksByCountry
};
