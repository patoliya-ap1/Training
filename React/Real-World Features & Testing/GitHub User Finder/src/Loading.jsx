const Loading = () => {
  return (
    <div
      className="animate-spin inline-block size-8 border-3 border-current border-t-transparent text-slate-600 dark:text-slate-300 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Loading;
