import { RootObject } from "../../instance/Api";

interface MyPagesProps {
  repo?: RootObject[];
  Url?: (Name: string) => void;
}

const MapPages = ({ repo, Url }: MyPagesProps) => {
  return (
    <>
      {repo?.map(
        (item) =>
          //  se o projeto tiver githubPages
          item.has_pages == true && (
            <button onClick={() => Url?.(item.name)}>{item.name}</button>
          )
      )}
    </>
  );
};

export default MapPages;
