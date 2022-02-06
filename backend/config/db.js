//mongodb connection file

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongo connected ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
