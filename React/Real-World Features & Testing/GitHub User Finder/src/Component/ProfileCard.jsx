import { PiUsersThreeFill } from "react-icons/pi";
import { PiUsersFill } from "react-icons/pi";
import { FaSquarePollVertical } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";

const ProfileCard = ({ userInfo }) => {
  const {
    avatar_url,
    name,
    bio,
    location,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = userInfo;

  console.log(userInfo);
  return (
    <div className="p-4 grid grid-cols-2 w-[90%] gap-3">
      <div className="col-span-2 flex justify-center sm:col-span-1">
        <img src={avatar_url} className="w-80" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div>
          <h2 className="text-slate-700 text-center sm:text-left dark:text-slate-500">
            {name || "unknown"}
          </h2>
          <p className="text-slate-500 text-center sm:text-left dark:text-slate-300">
            {bio || "unknown"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 mt-4 gap-3">
          <div className="shadow-md dark:shadow-slate-950 p-3">
            <p className="text-slate-400 dark:text-slate-500">Location</p>
            <p className="text-slate-800 dark:text-slate-300">
              {location || "unknown"}
            </p>
          </div>
          <div className="shadow-md dark:shadow-slate-950 p-3 overflow-hidden">
            <p className="text-slate-400 dark:text-slate-500">Website</p>
            <p className="text-slate-800 dark:text-slate-300">
              {blog || "unknown"}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-8">
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex justify-around items-end shadow-md dark:shadow-slate-950 p-2">
            <div>
              <p className="text-slate-500 ">Followers</p>
              <p className="text-3xl text-slate-700 dark:text-slate-300">
                {followers || "unknown"}
              </p>
            </div>
            <div className="text-3xl">
              <PiUsersThreeFill />
            </div>
          </div>
          <div className="flex justify-around items-end shadow-md dark:shadow-slate-950 p-2">
            <div>
              <p className="text-slate-500">Following</p>
              <p className="text-3xl text-slate-700 dark:text-slate-300">
                {following || "unknown"}
              </p>
            </div>
            <div className="text-3xl">
              <PiUsersFill />
            </div>
          </div>
          <div className="flex justify-around items-end shadow-md dark:shadow-slate-950 p-2">
            <div>
              <p className="text-slate-500">Public Repos</p>
              <p className="text-3xl text-slate-700 dark:text-slate-300">
                {public_repos || "unknown"}
              </p>
            </div>
            <div className="text-3xl">
              <FaSquarePollVertical />
            </div>
          </div>
          <div className="flex justify-around items-end shadow-md dark:shadow-slate-950 p-2">
            <div>
              <p className="text-slate-500">Public Gits</p>
              <p className="text-3xl text-slate-700 dark:text-slate-300">
                {public_gists || "unknown"}
              </p>
            </div>
            <div className="text-3xl">
              <FaGitSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
