import { Asset, File, PostFile } from "../types/types";

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

export async function addFile(file: PostFile): Promise<void> {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(file),
  });

  if (!response.ok) {
    throw new Error("Failed to add File");
  }
}

export async function updateStatus(
  id: string,
  newStatus: number
): Promise<File> {
  try {
    const response = await fetch(`${apiUrl}/files/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
}

export async function updateSaleStatus(
  id: string,
  newStatus: number
): Promise<File> {
  try {
    const response = await fetch(`${apiUrl}/files/${id}/salestatus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
}

export async function addNote(id: string, newNote: string): Promise<File> {
  try {
    const response = await fetch(`${apiUrl}/files/${id}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: newNote }),
    });

    if (!response.ok) {
      throw new Error("Failed to add note");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
}
