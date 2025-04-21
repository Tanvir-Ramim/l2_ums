import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.Default_password,
  bcrypt_salt_rounds: process.env.Bcrypt_salt_rounds,
}
