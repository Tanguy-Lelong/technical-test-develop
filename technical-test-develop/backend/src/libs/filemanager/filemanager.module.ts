import { FilemanagerProviders } from './filemanager.providers'
import { FileManagerService } from './filemanager.service'
import { IBackendConfig } from '../../app'

export class FileManagerModule {
  static async forRoot(config: IBackendConfig): Promise<FileManagerService> {
    return await FilemanagerProviders.forRoot(config)
  }
}
