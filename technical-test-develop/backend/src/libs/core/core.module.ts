import type { IDatabaseCredentials } from '../database/database.interface'
import { FileManagerModule } from '../filemanager/filemanager.module'
import { CoreService } from './core.services'
import { FileManagerService } from '../filemanager/filemanager.service'
import { DatabaseService } from '../database/database.service'
import { DatabaseModule } from '../database/database.module'
import { IBackendConfig } from '../../app'

export class CoreModule {
  static async forRoot(config: IBackendConfig): Promise<CoreService> {
    const credentials: IDatabaseCredentials = {
      url: `mongodb://${config.mongo.host}:${config.mongo.port}/`,
      database: config.mongo.databaseName,
      user: config.mongo.user,
      password: config.mongo.password,
    }

    // create services
    const databaseService: DatabaseService = await DatabaseModule.forRoot(credentials)
    const fileManagerService: FileManagerService = await FileManagerModule.forRoot(config)

    const coreService: CoreService = new CoreService()
    await coreService.init(fileManagerService, databaseService)
    await coreService.populateDatabase()

    return coreService
  }
}
