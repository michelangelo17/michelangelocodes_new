require('dotenv').config()

console.log('Database URL:', process.env.DATABASE_URL)
console.log('Migrations Directory:', 'src/db/migrations')

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  migrationsTable: 'pgmigrations',
  dir: '/migrations',
}
