import { Link } from "react-router-dom";
import porfilePlaceholder from "../assets/profile-placeholder.jpg";
import { memo } from "react";

const UserCard = ({ userInfo }) => {
  const {
    id,
    avatar_url,
    bio,
    public_repos,
    following,
    followers,
    login: username,
    company,
    created_at,
  } = userInfo;

  const joinedYear = new Date(created_at).getFullYear();

  console.log("re-render");

  return (
    <div className="rounded-md mt-3 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] shadow-md cursor-pointer transition-transform duration-300 ease-out hover:shadow-xl bg-slate-100 dark:bg-gray-700">
      {/* img + username + company */}
      <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] items-center gap-3 bg-slate-200 p-4 rounded-md dark:bg-slate-600">
        <div className="flex justify-center">
          <img
            src={avatar_url || porfilePlaceholder}
            className="w-30 shadow-md rounded-full"
            alt="github avatar image"
          />
        </div>
        <div className="flex justify-center space-x-5 ms-10 sm:m-0 items-center">
          <p className="text-center text-slate-600 dark:text-slate-400">
            username:{" "}
            <span className="text-slate-500 dark:text-slate-300">
              @{username || "unknown"}
            </span>
          </p>
          <p className="text-center text-slate-600 text-sm dark:text-slate-400">
            Company:{" "}
            <span className="text-slate-500 dark:text-slate-300">
              {company || "unknown"}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* Bio */}

      <div className="mt-4 p-6 rounded-md">
        <p className="text-gray-800 dark:text-slate-400">Bio:</p>
        <p className="text-gray-600 dark:text-slate-200">{bio || "unknown"}</p>
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 sm:grid-cols-[31%_31%_31%] mt-4 gap-4 box-border justify-center shadow-xl p-4">
        <Link to={`/repos/${username}`}>
          <div className="bg-cyan-600 rounded-md p-3 text-center shadow-xl cursor-pointer">
            <p className="text-2xl text-slate-100">
              {public_repos || "unknown"}
            </p>
            <p className="text-sm text-slate-300">Repos</p>
          </div>
        </Link>
        <div className="bg-gray-600 rounded-md p-3 text-center shadow-xl">
          <p className="text-2xl text-slate-100">{followers || "unknown"}</p>
          <p className="text-sm text-slate-300">Followers</p>
        </div>
        <div className="bg-cyan-950 rounded-md p-3 text-center shadow-xl">
          <p className="text-2xl text-slate-100">{following || "unknown"}</p>
          <p className="text-sm text-slate-300">following</p>
        </div>
      </div>

      {/* id + year */}

      <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] items-center justify-center gap-3 bg-slate-200 p-4 rounded-md mt-5 shadow-xl dark:bg-slate-600">
        <div className="bg-cyan-950 p-3 rounded-md text-center">
          <p className=" text-slate-400">
            Github ID:
            <span className="text-slate-100"> {id || "unknown"}</span>
          </p>
        </div>
        <div className="bg-gray-600 p-3 text-center rounded-md text-slate-300 dark:bg-gray-700">
          <p>
            Joined At{" "}
            <span className="text-slate-100 ">{joinedYear || "unknown"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(UserCard);
