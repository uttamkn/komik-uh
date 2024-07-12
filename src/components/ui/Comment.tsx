type CommentProps = {
  text: string;
  username: string;
  timestamp: string;
};

const Comment: React.FC<CommentProps> = (comment) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg mb-2">
      <div className="flex justify-between">
        <p className="text-lg font-semibold">{comment.username}</p>
        <p className=" text-gray-500">{comment.timestamp}</p>
      </div>
      <p className="text-sm">{comment.text}</p>
    </div>
  );
};

export default Comment;
