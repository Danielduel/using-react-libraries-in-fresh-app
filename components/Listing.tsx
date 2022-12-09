import { ListingData, ListingItem } from "../utils/listing.ts";

type ListingItemLinkProps = {
  url: string;
  label: string;
  external?: boolean;
};
const ListingItemLink: preact.FunctionComponent<ListingItemLinkProps> = ({
  url,
  label,
  external = false
}) => {
  return (
    <a
      target={external ? "_blank" : ""}
      rel="noopener noreferrer"
      href={url}
      class="p-2 text-lg"
    >{label}</a>
  );
}

const ListingItem: preact.FunctionComponent<ListingItem> = ({
  exampleUrl,
  npmPackageName,
  repositoryIslandFileUrl,
}) => {
  return (
    <div class="flex mb-2 w-full">
      <h2 class="text-3xl font-bold text-gray-400 w-1/2 text-right">{npmPackageName}</h2>
      <div class="border-l-1 pl-2 ml-2 flex flex-col gap-x-2">
        <ListingItemLink url={exampleUrl} label="Link to example" />
        { repositoryIslandFileUrl && <ListingItemLink external url={repositoryIslandFileUrl} label="Link to repository" /> }
      </div>
    </div>
  );
}

export const Listing: preact.FunctionComponent = () => {
  return (
    <div class="w-full">
      {ListingData.map((item) => (
        <ListingItem key={item.npmPackageName} {...item} />
      ))}
    </div>
  );
}
