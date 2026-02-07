const MessageComponent = ({
  message,
  type,
}: {
  message: string;
  type: string;
}) => {
  return (
    <div className="flex justify-center h-80 items-center shadow-md">
      <p className={`${type === "error" ? "text-red-500" : "text-slate-600"}`}>
        {message}
      </p>
    </div>
  );
};
export default MessageComponent;
