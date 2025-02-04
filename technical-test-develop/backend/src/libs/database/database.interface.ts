import mongoose from 'mongoose'
import winston from 'winston'

export interface IDatabaseCredentials {
  url: string
  database: string
  user?: string
  password?: string
}

export interface IDatabaseService {
  models: { name: string; model: mongoose.Model<any> }[]
  credentials: {
    url: string
    database: string
    user?: string
    password?: string
  }
  logger?: winston.Logger

  connect(): Promise<void>

  addModel(this: this, name: string, model: mongoose.Model<any>): Promise<void>
}

export interface IDatabaseModule {
  forRoot(credentials: IDatabaseCredentials): Promise<IDatabaseService>
}
