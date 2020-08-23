import mongoose from 'mongoose'
import { DB_URL } from 'babel-dotenv'

const connection = "mongodb://mongo:27017/mongo-test11";
export const connect = (opts = {}) => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
