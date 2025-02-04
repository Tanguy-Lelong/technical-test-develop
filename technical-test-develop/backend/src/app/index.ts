import { AppModule } from './app.module'
import { Express } from 'express'
import path from 'path'

export interface IBackendConfig {
  mongo: {
    host: string
    port: number
    databaseName: string
    user?: string
    password?: string
  }
  filesPath: string
  port: number
}

async function bootstrap(): Promise<void> {
  const config: IBackendConfig = {
    mongo: {
      host: 'localhost',
      port: 27021,
      databaseName: 'quizz',
    },
    filesPath: path.resolve('.', './datas'),
    port: 3001,
  }

  try {
    const appModule: Express = await AppModule.forRoot(config)
    appModule.listen(config.port, (): void => {
      console.log(`Backend app listening on port ${config.port}.\n Config : `, config)
    })
  } catch (e) {
    console.error({ error: e, state: 'down' })
  }
}

bootstrap()
