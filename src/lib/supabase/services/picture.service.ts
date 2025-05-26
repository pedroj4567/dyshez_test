import { supabase } from "../client";

export class PicturesServices {
  static readonly BUCKET_NAME = "pictures";

  static async getPictures(folder?: string): Promise<string[]> {
    const path = folder ? `${folder}/` : "";
    const { data, error } = await supabase.storage
      .from(this.BUCKET_NAME)
      .list(path);
    if (error) throw new Error(error.message);

    return data
      .filter((item) => item.name)
      .map((item) => `${path}${item.name}`);
  }

  static async uploadPictures(file: File, folder?: string): Promise<string> {
    const filePath = folder ? `${folder}/${file.name}` : file.name;

    const { error } = await supabase.storage
      .from(this.BUCKET_NAME)
      .upload(filePath, file);

    if (error) throw new Error(error.message);

    return filePath;
  }

  static async deletePictures(filePath: string): Promise<void> {
    const { error } = await supabase.storage
      .from(this.BUCKET_NAME)
      .remove([filePath]);

    if (error) throw new Error(error.message);
  }
}
