import { Comic } from "../api/types.ts";
import ComicCard from "./ui/ComicCard.tsx";

type ComicsContainerProps = {
  comics: Comic[];
};

const ComicsContainer: React.FC<ComicsContainerProps> = ({ comics }) => {
  return (
    <div className="flex-grow">
      <div className="mt-5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-11 w-4/5">
        {comics.map((comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default ComicsContainer;
