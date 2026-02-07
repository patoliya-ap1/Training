const Banner = ({ bannerImage }) => {
  return (
    <div className="flex justify-center flex-wrap mt-4  cursor-pointer">
      <div className="p-4 w-full rounded-md shadow-md dark:bg-slate-800 dark:shadow-slate-950 h-48  overflow-hidden">
        <img
          src={bannerImage}
          alt="banner"
          className={`rounded shadow-md h-full w-full object-cover transition-opacity duration-500 opacity-100`}
        />
      </div>
    </div>
  );
};

export default Banner;
