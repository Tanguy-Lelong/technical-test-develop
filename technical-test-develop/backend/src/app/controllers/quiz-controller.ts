import { NextFunction, Response, Request } from 'express'
import { IQuiz } from '../../libs/core/schemas'
import { QuizService } from '../services'

export class QuizController {
  #quizService: QuizService

  async init(webserversService: QuizService): Promise<void> {
    this.#quizService = webserversService
  }

  async quizList(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log({ type: 'Controller', method: 'quizList', params: req.params, body: req.body })
    await this.#quizService
      .quizList()
      .then((data: IQuiz[]): void => {
        res.json({ data })
        next()
      })
      .catch((err: Error): void => {
        next(err)
      })
  }

  async quizInfo(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log({ type: 'Controller', method: 'quizInfo', params: req.params, body: req.body })
    await this.#quizService
      .quizInfo({ _id: req.params.quizzId })
      .then((data: IQuiz | null): void => {
        res.json({ data })
        next()
      })
      .catch((err: Error): void => {
        next(err)
      })
  }

  async quizDelete(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log({ type: 'Controller', method: 'quizDelete', params: req.params, body: req.body })
    await this.#quizService
      .quizDelete({ _id: req.params.quizId })
      .then((): void => {
        res.sendStatus(200)
        next()
      })
      .catch((err: Error): void => {
        next(err)
      })
  }

  async quizAdd(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log({ type: 'Controller', method: 'quizAdd', params: req.params, body: req.body })
    await this.#quizService
      .quizAdd(req.body)
      .then((data: IQuiz): void => {
        res.json({ data })
        next()
      })
      .catch((err: Error): void => {
        next(err)
      })
  }
}
