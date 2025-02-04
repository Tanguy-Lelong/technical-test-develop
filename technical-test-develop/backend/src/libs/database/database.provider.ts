import { IDatabaseCredentials } from './database.interface'
import { DatabaseService } from './database.service'

export class DatabaseProvider {
  static async forRoot(credentials: IDatabaseCredentials): Promise<DatabaseService> {
    const databaseService: DatabaseService = new DatabaseService()
    await databaseService.init(credentials)
    await databaseService.connect()
    return databaseService
  }
}
