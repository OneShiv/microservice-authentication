import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean
})
// set up a mongoose model and pass it using module.exports
const User = mongoose.model('User', userSchema);

export default User;