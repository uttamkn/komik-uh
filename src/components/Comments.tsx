import Comment from "./ui/Comment";
import axios from "axios";
import { useState, useEffect } from "react";
import { Comment_t } from "../api/types";
import { getToken } from "../api/auth";

const Comments: React.FC<{ bookid: string | undefined; userid: number }> = ({
  bookid,
  userid,
}) => {
  const [comments, setComments] = useState<Comment_t[]>([]);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    axios
      .get(`/comments/book/${bookid}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        if (res.data.comments === undefined) return;
        setComments([...res.data.comments]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [bookid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleClick = async () => {
    setComment("");
    const newComment = {
      user_id: userid,
      book_id: parseInt(bookid as string),
      content: comment,
    };
    await axios.put(`/comments`, newComment, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  };

  return (
    <div className="flex flex-col w-full m-auto mt-5">
      <div className="flex border rounded-md mb-2">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Comment as many times as you want!"
          value={comment}
          className="w-full relative outline-none p-2 rounded-md"
        />
        <button
          className="p-1 font-heading text-4xl min-w-10"
          onClick={handleClick}
        >
          {">"}
        </button>
      </div>
      {comments[0]?.comment &&
        comments.map((comment) => (
          <Comment
            key={comment.comment.id}
            text={comment.comment.content}
            timestamp={comment.comment.timestamp}
            username={comment.username}
          />
        ))}
    </div>
  );
};

export default Comments;
