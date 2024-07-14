import { Comic, ReadingProgress } from "../api/types";
import { useNavigate } from "react-router-dom";

type ReadingHistoryProps = {
  comics: Comic[];
  readingProgress: ReadingProgress[];
};

const ReadingHistory: React.FC<ReadingHistoryProps> = ({
  comics,
  readingProgress,
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/comic/${id}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-3">
      {readingProgress.length > 0 ? (
        readingProgress.map((progress) => {
          const comic = comics.find(
            (comic) => comic.id === progress.bookrepo_id
          );
          return (
            <button
              key={progress.bookrepo_id}
              className="w-full flex justify-between items-center p-3 border-b border-gray-200"
              onClick={() => handleClick(progress.bookrepo_id)}
            >
              <div>
                <div className="text-lg font-semibold">{comic?.title}</div>
                <div className="text-sm text-gray-500">by {comic?.author}</div>
              </div>
              <div className="text-sm text-gray-600">
                Page {progress.page_num}
              </div>
            </button>
          );
        })
      ) : (
        <div className="text-center text-gray-500">
          No reading history available
        </div>
      )}
    </div>
  );
};

export default ReadingHistory;
