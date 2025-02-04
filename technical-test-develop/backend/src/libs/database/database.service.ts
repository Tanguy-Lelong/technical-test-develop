import { IDatabaseCredentials } from './database.interface'
import mongoose from 'mongoose'

export class DatabaseService {
  #credentials
  async init(credentials: IDatabaseCredentials) {
    this.#credentials = credentials
  }

  async connect() {
    const options: mongoose.ConnectOptions = {
      dbName: this.#credentials.database,
      user: this.#credentials.user,
      pass: this.#credentials.password,
    }
    await mongoose.connect(this.#credentials.url, options)
    await mongoose.connection.db.dropDatabase()
  }
}
