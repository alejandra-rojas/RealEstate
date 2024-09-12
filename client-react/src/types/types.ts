export interface Asset {
  createdAt: string;
  propertyId: number;
  salePrice: number;
  status: Status;
  saleStatus: SaleStatus;
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

export enum SaleStatus {
  W4Seller,
  W4Buyer,
  W4ThirdParty,
  MettingScheduled,
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
  saleStatus: number;
  propertyDetailsId: number;
  propertyLiasonAgentId: number;
  sellerId: number;
  buyerId: number;
  propertyDetails: PropertyDetails;
  seller: Seller;
  propertyLiasonAgent: PropertyLiasonAgent;
  buyer: Buyer;
  events: Event[];
  notes: Note[];
}

export interface Note {
  noteId: number;
  createdAt: string;
  description: string;
  propertyId: number;
  author: string;
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
