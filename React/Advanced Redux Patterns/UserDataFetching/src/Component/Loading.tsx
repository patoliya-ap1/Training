const Loading = () => {
  return (
    <div className="flex justify-center h-[80vh] items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-r-transparent border-blue-500">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
