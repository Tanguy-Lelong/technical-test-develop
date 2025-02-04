import fsPromises from 'fs/promises'

export const readFileUtf8 = async (filePath: string): Promise<string> => {
  return await fsPromises.readFile(filePath, 'utf8')
}

export const writeFileUtf8 = async (filePath: string, strContent: string): Promise<void> => {
  await fsPromises.writeFile(filePath, strContent, {
    encoding: 'utf8',
    flag: 'w',
  })
}
