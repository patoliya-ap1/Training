const MessageCard = ({ message, type }) => {
  return (
    <div>
      <div className="flex justify-center flex-wrap mt-4">
        <div className="p-4 w-[95%] rounded-md shadow-md dark:bg-gray-800 dark:shadow-slate-950">
          <div className="flex justify-center items-center h-60">
            <h3
              className={`${type === "error" ? "text-red-500 dark:text-red-400" : "text-slate-500"} dark:text-gray-400`}
            >
              {message}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageCard;
