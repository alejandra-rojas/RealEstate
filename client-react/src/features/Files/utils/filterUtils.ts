import { File } from "../../../types/types";

export function sortByCreationDate(files: File[]): File[] {
  return [...files].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function filterFilesByText(files: File[], filterText: string): File[] {
  const searchText = filterText.toLowerCase();
  return files.filter((file) => {
    return (
      file.propertyDetails.propertyName.toLowerCase().includes(searchText) ||
      file.propertyDetails.address.toLowerCase().includes(searchText) ||
      file.propertyDetails.description.toLowerCase().includes(searchText) ||
      file.seller.fullName.toLowerCase().includes(searchText) ||
      file.propertyLiasonAgent.name.toLowerCase().includes(searchText) ||
      String(file.salePrice).toLowerCase().includes(searchText) ||
      (file.buyer && file.buyer.fullName.toLowerCase().includes(searchText))
    );
  });
}
