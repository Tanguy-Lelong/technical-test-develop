import { DatabaseService } from '../database/database.service'
import { FileManagerService } from '../filemanager/filemanager.service'

export class CoreService {
  #filemanagerService: FileManagerService
  #databaseService: DatabaseService
  async init(filemanagerService: FileManagerService, databaseService: DatabaseService) {
    this.#filemanagerService = filemanagerService
    this.#databaseService = databaseService
    console.log('Core Service is working')
  }

  async populateDatabase() {
    await this.#filemanagerService.importFilesIntoDatabase()
  }
}
