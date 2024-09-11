import { File, Status } from "../../../types/types";

export function sortByCreationDate(files: File[]): File[] {
  return [...files].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function filterFiles(
  files: File[],
  filterText: string,
  minPrice: number | null,
  maxPrice: number | null,
  statuses: {
    active: boolean;
    underOffer: boolean;
    inactive: boolean;
    sold: boolean;
  }
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

    const matchesStatus =
      (statuses.active && file.status === Status.Active) ||
      (statuses.underOffer && file.status === Status.UnderOffer) ||
      (statuses.inactive && file.status === Status.Inactive) ||
      (statuses.sold && file.status === Status.Sold);

    return (
      matchesSearchText && matchesMinPrice && matchesMaxPrice && matchesStatus
    );
  });
}
