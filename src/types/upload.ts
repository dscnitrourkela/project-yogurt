export interface UploadedImage {
  public_id: string;
  secure_url: string;
  original_filename: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

export interface CloudinaryUploadResult {
  event: string;
  info: {
    public_id: string;
    secure_url: string;
    url: string;
    original_filename: string;
    format: string;
    width: number;
    height: number;
    bytes: number;
    created_at: string;
  };
}
