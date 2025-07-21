export default () => ({
  database: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    name: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    ttl: process.env.JWT_TTL,
  },
});
