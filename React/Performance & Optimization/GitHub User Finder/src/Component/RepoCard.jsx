import { AiFillEye } from "react-icons/ai";

const RepoCard = ({ repoInfo = {} }) => {
  const { name, watchers_count, created_at, language, forks, size } = repoInfo;

  const month = new Date(created_at).toDateString("default", {
    month: "short",
  });

  const sizeInMB = (size / 1024).toFixed(2);

  return (
    <div className="p-4 shadow-md overflow-hidden h-60 text-wrap relative cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl dark:bg-gray-700 dark:rounded-md dark:shadow-gray-950">
      {/* repo name */}
      <div className="shadow-md p-2 rounded-md bg-gray-300 dark:bg-gray-500">
        <h3 className="text-slate-400 text-sm dark:text-slate-300">
          Repository Name:
        </h3>
        <p className="wrap-break-words text-slate-700 dark:text-slate-200">
          {name}
        </p>
      </div>
      {/* details */}
      <div className="p-2 overflow-auto text-gray-500 dark:text-gray-400">
        <p className="text-[0.9rem] ">Language: {language || "unknown"}</p>
        <p className="text-[0.9rem]">Forks: {forks || 0}</p>
        <p className="text-[0.9rem]">Size: {sizeInMB || "unknown"} Mb</p>
      </div>
      {/* view + date */}
      <div className="w-[90%] right-5 grid grid-cols-1 sm:grid-cols-[60%_25%] gap-2 justify-center text-sm absolute bottom-3 sm:right-1/20">
        <div className="text-center text-xs bg-gray-300 p-1 rounded-md text-gray-600 dark:bg-gray-600 dark:text-gray-400">
          {month}
        </div>
        <div className="text-center flex justify-center items-center space-x-1 bg-gray-200 rounded-md text-gray-700 dark:bg-gray-600 dark:text-gray-300">
          <AiFillEye />
          <span>{watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
