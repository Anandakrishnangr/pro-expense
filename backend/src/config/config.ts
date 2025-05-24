export const MONGO_URI = process.env.MONGO_URI
export const PORT = process.env.PORT

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h'
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
export const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION || '7d'

export const REDIS_URL = process.env.REDIS_URL
export const REDIS_PORT = process.env.REDIS_PORT
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD
export const REDIS_DB = process.env.REDIS_DB || '0'
export const REDIS_TLS = process.env.REDIS_TLS === 'true'
export const REDIS_USERNAME = process.env.REDIS_USERNAME || ''
export const REDIS_PASSWORD_AUTH = process.env.REDIS_PASSWORD_AUTH || ''
export const REDIS_MAX_RETRIES = parseInt(process.env.REDIS_MAX_RETRIES || '5', 10)
export const REDIS_RETRY_DELAY = parseInt(process.env.REDIS_RETRY_DELAY || '1000', 10)
export const REDIS_RETRY_BACKOFF = parseInt(process.env.REDIS_RETRY_BACKOFF || '1000', 10)
export const REDIS_RETRY_MAX_DELAY = parseInt(process.env.REDIS_RETRY_MAX_DELAY || '30000', 10)
export const REDIS_RETRY_STRATEGY = process.env.REDIS_RETRY_STRATEGY || 'default'   