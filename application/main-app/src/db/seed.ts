import pool from './pool'

const seedDatabase = async () => {
  try {
    // Create the 'about' table if it doesn't exist
    // await pool.query(`
    //   CREATE TABLE IF NOT EXISTS about (
    //     id SERIAL PRIMARY KEY,
    //     paragraph TEXT NOT NULL
    //   )
    // `)

    console.log('Database seeded successfully.')
  } catch (err) {
    console.error('Error seeding database:', err)
  } finally {
    pool.end()
  }
}

seedDatabase()
