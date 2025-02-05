import { CoreService } from '../../libs/core/core.services'
import { IQuiz } from '../../libs/core/schemas'
import QuizModel from '../../libs/core/schemas/quiz.schema'
import fs from 'fs';
import path from 'path';

export class QuizService {
  #coreService: CoreService

  async init(coreService: CoreService): Promise<void> {
    this.#coreService = coreService
  }

  async quizList(): Promise<IQuiz[]> {
    console.debug({ type: 'Service', method: 'quizList' })
    return (await QuizModel.find().lean().exec()) || []
  }

  async quizInfo(filter: { _id: string }): Promise<IQuiz | null> {
    console.debug({ type: 'Service', method: 'quizInfo', filter })
    const foundQuiz = await QuizModel.findOne(filter).lean().exec()
    return foundQuiz ? foundQuiz : null
  }

  async quizDelete(filter: { _id: string }): Promise<void> {
    console.debug({ type: 'Service', method: 'quizDelete', filter })
    await QuizModel.deleteOne(filter).exec()
  }

  async quizAdd(quiz: IQuiz): Promise<IQuiz> {
    console.debug({ type: 'Service', method: 'quizAdd', quiz })
    return new QuizModel(quiz).save()
  }

  async quizExport(): Promise<void> {
    console.debug({ type: 'Service', method: 'quizExport' });
    const quizzes = await QuizModel.find().lean().exec();
    const filePath = path.resolve(__dirname, '../../../datas/quizzes.json');
    fs.writeFileSync(filePath, JSON.stringify({ quizzes }, null, 2), 'utf-8');
  }    
}
