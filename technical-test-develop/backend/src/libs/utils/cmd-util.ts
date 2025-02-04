import { exec } from 'child_process'

export interface ICommandResult {
  success: boolean
  message?: string
  error?: string
}
export const sh = async (cmd: string): Promise<ICommandResult> => {
  const result: ICommandResult = {
    success: false,
  }

  return await new Promise(resolve => {
    exec(cmd, (error, stdout, stderr): void => {
      result.success = error === null
      result.message = (result.success ? stdout : stderr).toString().trim()
      result.error = error?.message
      resolve(result)
    })
  })
}
