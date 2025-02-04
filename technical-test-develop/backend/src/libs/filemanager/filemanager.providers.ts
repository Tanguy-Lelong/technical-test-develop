import { IBackendConfig } from '../../app'
import { FileManagerService } from './filemanager.service'

export class FilemanagerProviders {
  static async forRoot(config: IBackendConfig): Promise<FileManagerService> {
    const fileManagerService: FileManagerService = await new FileManagerService()
    await fileManagerService.init(config)
    return fileManagerService
  }
}
