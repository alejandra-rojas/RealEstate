import { File } from "../../../types/types";

export function sortByCreationDate(files: File[]): File[] {
  return [...files].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function filterFiles(
  files: File[],
  filterText: string,
  minPrice: number | null,
  maxPrice: number | null
): File[] {
  const searchText = filterText.toLowerCase();

  return files.filter((file) => {
    const matchesSearchText =
      file.propertyDetails.propertyName.toLowerCase().includes(searchText) ||
      file.propertyDetails.address.toLowerCase().includes(searchText) ||
      file.propertyDetails.description.toLowerCase().includes(searchText) ||
      file.seller.fullName.toLowerCase().includes(searchText) ||
      file.propertyLiasonAgent.name.toLowerCase().includes(searchText) ||
      String(file.salePrice).toLowerCase().includes(searchText) ||
      (file.buyer && file.buyer.fullName.toLowerCase().includes(searchText));

    const matchesMinPrice = minPrice === null || file.salePrice >= minPrice;
    const matchesMaxPrice = maxPrice === null || file.salePrice <= maxPrice;

    return matchesSearchText && matchesMinPrice && matchesMaxPrice;
  });
}
