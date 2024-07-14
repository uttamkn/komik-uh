import { useEffect, useState } from "react";
import { Comic } from "../../types.ts";
import { getThumbnailUrl } from "../../api/utils.ts";
import { useNavigate } from "react-router-dom";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThumbnail = async () => {
      const url = await getThumbnailUrl(comic.id);
      setImgUrl(url);
    };
    fetchThumbnail();
  }, [comic.id]);

  const handleClick = () => {
    navigate(`/comic/${comic.id}`);
  };

  return (
    <div className="flex justify-center p-2">
      <button
        onClick={handleClick}
        className="border w-36 flex flex-col items-center justify-center shadow-lg rounded bg-slate-50"
      >
        <div className="relative w-full pb-[150%] bg-gray-200 rounded-t overflow-hidden">
          <img
            src={imgUrl}
            alt={comic.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-0 text-center">{comic.title}</div>
      </button>
    </div>
  );
};

export default ComicCard;
