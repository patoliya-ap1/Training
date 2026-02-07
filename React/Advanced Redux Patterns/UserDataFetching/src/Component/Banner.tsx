const Banner = ({ imgUrl }: { imgUrl: string }) => (
  <div>
    <img
      className="w-full object-cover h-80 rounded-md"
      src={imgUrl}
      alt="banner"
    />
  </div>
);
export default Banner;
