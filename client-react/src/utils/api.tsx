import { Asset, File } from "../types/types";

export const apiUrl = "http://localhost:5122/api/Properties";

export async function fetchPublicPortfolio(): Promise<Asset[]> {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function fetchPublicProperty(id: string): Promise<Asset> {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function fetchFiles(): Promise<File[]> {
  try {
    const response = await fetch(`${apiUrl}/files/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function fetchFileById(id: string): Promise<File> {
  try {
    const response = await fetch(`${apiUrl}/files/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}
