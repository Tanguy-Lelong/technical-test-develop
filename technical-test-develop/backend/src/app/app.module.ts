import { CoreModule } from '../libs/core/core.module'
import { CoreService } from '../libs/core/core.services'
import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Express, NextFunction, Request, Response } from 'express'
import { IBackendConfig } from '.'
import { QuizRoutes } from './routes'

export class AppModule {
  static async forRoot(config: IBackendConfig): Promise<Express> {
    // Express init
    const app: Express = express()
    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(
      cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      }),
    )
    app.all('*', (req: Request, res: Response, next: NextFunction) => {
      console.log(req.url)
      next()
    })
    // Services init
    const coreService: CoreService = await CoreModule.forRoot(config)

    // Routes init
    app.use('/api/quizzes', await QuizRoutes.forRoot(coreService))
    return app
  }
}
