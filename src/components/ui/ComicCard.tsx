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
    <div className="flex">
      <button
        onClick={handleClick}
        className="flex border w-40 h-50 flex-col items-center justify-center shadow-lg rounded bg-slate-50 transform transition-transform duration-300 hover:scale-105 active:scale-100"
      >
        <img src={imgUrl} alt="/" className="w-full h-full" />
        <div>{comic.title}</div>
      </button>
    </div>
  );
};

export default ComicCard;
