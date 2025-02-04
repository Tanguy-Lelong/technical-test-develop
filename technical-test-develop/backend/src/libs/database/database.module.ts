import { DatabaseProvider } from './database.provider'
import { IDatabaseCredentials } from './database.interface'
import { DatabaseService } from './database.service'

export class DatabaseModule {
  static async forRoot(credentials: IDatabaseCredentials): Promise<DatabaseService> {
    return await DatabaseProvider.forRoot(credentials)
  }
}
