module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres')
  const host = env('DATABASE_HOST', 'postgres')
  const port = env.int('DATABASE_PORT', 5432)
  const database = env('DATABASE_NAME', 'strapi')
  const username = env('DATABASE_USERNAME', 'postgres')
  const password = env('DATABASE_PASSWORD', 'password')
  const ssl = env.bool('DATABASE_SSL', false)

  console.log('Database Configuration:')
  console.log('Client:', client)
  console.log('Host:', host)
  console.log('Port:', port)
  console.log('Database:', database)
  console.log('Username:', username)
  console.log('Password:', password)
  console.log('SSL:', ssl)

  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true,
          ),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  }

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  }
}
