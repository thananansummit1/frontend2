const env = 'development'

const config = {
  development: {
    BUILD: true,
    PORT: process.env.PORT || 3002,
    API_URL: 'http://localhost:5001/api/',
    FRONTEND_URL: 'http://localhost',
  },
  staging: {
    BUILD: false,
    PORT: process.env.PORT || 8080,
    API_URL: 'xxxx',
    FRONTEND_URL: 'xxxx',
  },
  production: {
    BUILD: false,
    PORT: process.env.PORT || 8080,
    API_URL: 'xxxx',
    FRONTEND_URL: 'xxxxx',
  },
}

const envConfig = config[env]

module.exports = envConfig
