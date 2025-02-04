import { readFileUtf8 } from '../utils'

export type IFileImport = {
  quizzes: IFileQuizz[]
}

export type IFileQuizz = {
  name: string
  questions: IFileQuizzQuestion[]
}

export type IFileQuizzQuestion = {
  name: string
  answers: IFileQuizzAnswer[]
}

export type IFileQuizzAnswer = {
  name: string
  isCorrect: boolean
}

export class BackendImporter {
  #filesPath: string
  constructor(studioFilesPath: string) {
    this.#filesPath = studioFilesPath
  }

  async importFiles(): Promise<IFileImport> {
    const contents: string = await readFileUtf8(this.#filesPath + '/quizzes.json')
    const fileImport: IFileImport = JSON.parse(contents)
    return fileImport
  }
}
