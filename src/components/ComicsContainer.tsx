import { Comic } from "../types.ts";
import ComicCard from "./ui/ComicCard.tsx";

type ComicsContainerProps = {
  comics: Comic[];
};

const ComicsContainer: React.FC<ComicsContainerProps> = ({ comics }) => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-slate-200">
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-4/5 mt-8">
        {comics.map((comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default ComicsContainer;
