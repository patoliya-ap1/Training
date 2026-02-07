import { ErrorBoundary } from "react-error-boundary";
import GithubUserFinder from "../Component/GithubUserFinder";
import ErrorFallback from "../Component/ErrorFallback";

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-center text-slate-400">Home</h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GithubUserFinder />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
