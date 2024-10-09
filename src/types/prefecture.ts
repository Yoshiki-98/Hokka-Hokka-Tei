export interface Prefecture {
  code: number;
  name: string;
  location?: {
    lat?: number;
    lng?: number;
  }
}
