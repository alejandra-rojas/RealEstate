export interface Property {
  createdAt: string;
  propertyId: number;
  salePrice: number;
  status: Status;
  propertyName: string;
  address: string;
  landSizeInSquareMeters: number;
  constructionSizeInSquareMeters: number;
  numberOfRooms: number;
  description: string;
  photo: string;
}

export enum Status {
  Active,
  UnderOffer,
  Sold,
  Inactive,
}
