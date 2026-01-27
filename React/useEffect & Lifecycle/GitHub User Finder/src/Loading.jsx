const Loading = () => {
  return (
    <div
      class="animate-spin inline-block size-8 border-3 border-current border-t-transparent text-slate-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};
export default Loading;
