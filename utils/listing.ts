const repoUrl = "https://github.com/Danielduel/using-react-libraries-in-fresh-app";

export type ListingItem = {
  npmPackageName: string;
  routeFilePath: string;
  islandFilePath: string | null;
  exampleUrl: string;
  repositoryRouteFileUrl: string;
  repositoryIslandFileUrl: string | null;
};

const listingItem = (
  npmPackageName: string,
  exampleUrl: string,
  routeFilePath: string,
  islandFilePath: string | null
): ListingItem => ({
  npmPackageName,
  routeFilePath,
  islandFilePath,
  exampleUrl,
  repositoryRouteFileUrl: `${repoUrl}/blob/main/routes/${routeFilePath}`,
  repositoryIslandFileUrl: islandFilePath ? `${repoUrl}/blob/main/islands/${islandFilePath}` : null
});

export const ListingData: ListingItem[] = [
  listingItem("react-hook-form", "react-hook-form", "react-hook-form/index.tsx", "react-hook-form.tsx"),
  listingItem("parse-json", "parse-json", "parse-json/index.tsx", null)
];
