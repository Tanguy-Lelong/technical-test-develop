import path from 'path'
import { IBackendConfig } from '../../app'
import QuizModel, { IQuiz } from '../core/schemas/quiz.schema'
import { BackendExporter } from './backend-exporter'
import { BackendImporter, IFileImport } from './backend-importer'

export class FileManagerService {
  #filesPath: string
  async init(config: IBackendConfig) {
    this.#filesPath = path.resolve(__dirname, config.filesPath)
  }

  async importFilesIntoDatabase(): Promise<void> {
    const importer: BackendImporter = new BackendImporter(this.#filesPath)
    const importResult: IFileImport = await importer.importFiles()
    // TODO : import all quizzes from file rather than only the first one
    console.log(importResult.quizzes[0])
    await new QuizModel(importResult.quizzes[0]).save()
  }

  async exportDatabaseToFiles() {
    const exporter: BackendExporter = new BackendExporter(this.#filesPath)
    // TODO : get quizzes from database with QuizModel and put in files obj
    const files: { quizzes: IQuiz[] } = {
      quizzes: [],
    }
    await exporter.exportFiles(files)
  }
}
