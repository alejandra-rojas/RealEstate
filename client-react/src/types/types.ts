export interface Asset {
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

interface PropertyDetails {
  propertyDetailsId: number;
  propertyName: string;
  address: string;
  landSizeInSquareMeters: number;
  constructionSizeInSquareMeters: number;
  numberOfRooms: number;
  description: string;
  photo: string;
  propertyId: number;
}

interface Seller {
  sellerId: number;
  fullName: string;
  primaryNumber: string;
}

interface PropertyLiasonAgent {
  agentId: number;
  name: string;
  primaryNumber: string;
  email: string;
  photo: string;
}

interface Buyer {
  buyerId: number;
  fullName: string;
  primaryNumber: string;
}

interface Event {
  eventId: number;
  date: string;
  description: string;
  propertyId: number;
}

export interface File {
  propertyId: number;
  createdAt: string;
  salePrice: number;
  agreedCommission: number;
  status: number;
  propertyDetailsId: number;
  propertyLiasonAgentId: number;
  sellerId: number;
  buyerId: number;
  propertyDetails: PropertyDetails;
  seller: Seller;
  propertyLiasonAgent: PropertyLiasonAgent;
  buyer: Buyer;
  events: Event[];
}

export interface PostFile {
  propertyName: string;
  salePrice: number;
  propertyLiasonAgentId: number;
  //   agreedCommission: string;
  //   sellerId: number;
  //   landSizeInSquareMeters: number;
  //   constructionSizeInSquareMeters: number;
  //   numberOfRooms: number;
  //   description: string;
  //   photo: string;
}
