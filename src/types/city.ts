export interface City {
  code: string;
  name: string;
  location? : {
    lat?: number;
    lng?: number;
  }
}
