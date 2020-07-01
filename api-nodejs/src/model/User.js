const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  cpf: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    uppercase: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
})

UserSchema.pre('save', async function(next) {
  const encryptedPassword = await bcrypt.hash(this.password, 2);
  this.password = encryptedPassword;
  next()
})

mongoose.model("User", UserSchema)