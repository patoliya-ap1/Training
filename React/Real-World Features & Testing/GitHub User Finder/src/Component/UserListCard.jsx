import { NavLink } from "react-router-dom";

const UserListCard = ({ profile, username }) => {
  return (
    <div className="p-3 grid grid-rows-2 grid-cols-2 shadow-md dark:bg-slate-800 dark:shadow-slate-950 overflow-hidden">
      <div className="flex items-center space-x-3 row-span-2 justify-center">
        <img
          src={profile}
          alt="avatar"
          className="rounded-full w-15 shadow-md"
        />
      </div>
      <div className="row-span-2 space-y-3">
        <p className="sm:text-lg text-slate-700 dark:text-slate-500">
          {username}
        </p>
        <NavLink
          className="text-slate-500 dark:text-slate-300"
          to={`/view-profile/${username}`}
        >
          View Profile
        </NavLink>
      </div>
    </div>
  );
};
export default UserListCard;
