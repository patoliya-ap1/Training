const UserCard = ({ userInfo }) => {
  const {
    id,
    name,
    avatar_url,
    bio,
    public_repos,
    following,
    followers,
    login: username,
    company,
    created_at,
  } = userInfo;

  return (
    <div className="border border-slate-300 rounded-md mt-3 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] shadow-md cursor-pointer transition-transform duration-300 ease-out hover:scale-95">
      <div className="flex justify-between">
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Joined: {new Date(created_at).getFullYear()}</p>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-4">
        <img
          src={avatar_url}
          alt={name || "github avatar"}
          className="rounded-full w-50 max-w-full border border-slate-400 shadow-md cursor-pointer"
        />
        <div className="flex space-x-3">
          <p className="bg-green-800 p-3 rounded-2xl text-slate-200 cursor-pointer">
            Followers: {followers}
          </p>
          <p className="bg-sky-800 p-3 rounded-2xl text-slate-200 cursor-pointer">
            Following: {following}
          </p>
        </div>
      </div>
      <hr className="my-5 border border-slate-300 shadow-md" />
      <div>
        <h2>Name: {name || "unknown"}</h2>
        <p>Company: {company || "unknown"}</p>
        <p>Bio: {bio || "unknown"}</p>
        <p>Public Repository: {public_repos || "unknown"}</p>
      </div>
    </div>
  );
};

export default UserCard;
