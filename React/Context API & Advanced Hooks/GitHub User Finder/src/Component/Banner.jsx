const Banner = ({ bannerImage }) => {
  return (
    <div className="flex justify-center flex-wrap mt-4 relative cursor-pointer">
      <div className="p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md shadow-md dark:bg-gray-700 h-48 relative overflow-hidden">
        <img
          src={bannerImage}
          alt="banner"
          className={`absolute top-0 left-0 rounded shadow-md h-full w-full object-cover transition-opacity duration-500 opacity-90  opacity-100`}
        />
      </div>
    </div>
  );
};

export default Banner;
