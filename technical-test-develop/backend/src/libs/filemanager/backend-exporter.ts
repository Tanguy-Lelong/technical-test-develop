import { IQuiz } from '../core/schemas'

export interface IDatabaseExport {
  quizzes: IQuiz[]
}

export class BackendExporter {
  #filesPath: string
  constructor(studioFilesPath: string) {
    this.#filesPath = studioFilesPath
  }
  async exportFiles(databaseContent: { quizzes: IQuiz[] }): Promise<void> {
    // TODO : use file utils to write databaseContent to this.#filesPath/quizzes.json
  }
}
