import { Comic } from "../../types.ts";
//test
// import rotatingImage from "../../assets/images/rotatingImage1.jpg";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const imgUrl = `process.env.VITE_API_URL/${comic.thumbnail}`;
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3 p-4 border-2 border-primary rounded-md">
        <img src={imgUrl} alt="/" className="w-40 h-40" />
        <div>20th century boys</div>
      </div>
    </div>
  );
};

export default ComicCard;
