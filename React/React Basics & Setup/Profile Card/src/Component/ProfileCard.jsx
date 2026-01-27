const ProfileCard = ({ name, role, avatar }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-slate-700 w-120 space-y-5 rounded-2xl p-4 cursor-pointer transition-all duration-300 ease-out hover:border-slate-400 shadow-lg dark:bg-slate-800">
      <div className="flex justify-center bg-cyan-950 w-full rounded-2xl shadow-md">
        <div className="w-70 p-3 transition-transform duration-300 ease-out hover:scale-95">
          <img
            className="w-full rounded-full border-slate-100 border-5"
            src={avatar}
            alt={name || "avatar"}
          />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl">{name}</h2>
        <hr className="border-slate-400" />
        <p className="">
          Role: <span>{role}</span>
        </p>
      </div>
      <div className="border border-slate-700 w-full rounded-2xl p-2 space-y-3 text-right shadow-md dark:bg-cyan-950 transition-all duration-300 ease-out hover:border-slate-400">
        <div className="border-b-2 border-slate-400">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="border-b-2 border-slate-400">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="border-b-2 border-slate-400">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
