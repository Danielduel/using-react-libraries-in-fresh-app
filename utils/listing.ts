const repoUrl = "https://github.com/Danielduel/using-react-libraries-in-fresh-app";

export type ListingItem = {
  npmPackageName: string;
  routeFilePath: string;
  islandFilePath: string;
  exampleUrl: string;
  repositoryRouteFileUrl: string;
  repositoryIslandFileUrl: string;
};

const listingItem = (
  npmPackageName: string,
  exampleUrl: string,
  routeFilePath: string,
  islandFilePath: string
): ListingItem => ({
  npmPackageName,
  routeFilePath,
  islandFilePath,
  exampleUrl,
  repositoryRouteFileUrl: `${repoUrl}/blob/main/routes/${routeFilePath}`,
  repositoryIslandFileUrl: `${repoUrl}/blob/main/islands/${islandFilePath}`
});

export const ListingData: ListingItem[] = [
  listingItem("react-hook-form", "react-hook-form", "react-hook-form/index.tsx", "react-hook-form.tsx"),
];
