import { useEffect, useState } from "react";
import { Comic } from "../../types.ts";
import { getThumbnailUrl } from "../../api/utils.ts";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const fetchThumbnail = async () => {
      const url = await getThumbnailUrl(comic.id);
      setImgUrl(url);
    };
    fetchThumbnail();
  }, [comic.id]);

  const handleClick = () => {};

  return (
    <div className="flex">
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-center gap-4 p-2"
      >
        <img src={imgUrl} alt="/" className="w-40 h-40 rounded" />
        <div>{comic.title}</div>
      </button>
    </div>
  );
};

export default ComicCard;
