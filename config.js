const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  expressPort: process.env.EXPRESS_PORT,
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: (process.env.USE_SSL.toLowerCase() === 'true'),
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY
}

