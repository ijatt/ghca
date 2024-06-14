import { v4 as uuidv4 } from "uuid";

/**
 * Uploads one or multiple files to a specified folder.
 * 
 * @param files - The file(s) to be uploaded. Can be a single file or an array of files.
 * @param folder - The folder where the files will be uploaded to.
 * @returns A promise that resolves to an array of file paths if multiple files are uploaded, or a single file path if a single file is uploaded.
 * @throws Throws an error if there is an issue with the upload process.
 */
export async function uploadImage(file: File, folder: string): Promise<string> {
  const client = supabase()
  try {
      const { data, error } = await client.storage.from(folder).upload(`${uuidv4()}.pdf`, file)
      if (error) throw error
      return data.path
  } catch (error) {
    throw error
  }
}
