import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import ReposList from "../Pages/ReposList";
import Loading from "../Loading";
import MessageCard from "./MessageCard";
import ProfileCard from "./ProfileCard";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const ViewProfile = () => {
  const { username } = useParams();

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const apiUrl = "https://api.github.com/users";
  const customUrl = `${apiUrl}/${username}`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  const { data, loading, error } = useFetch(customUrl, options);

  return (
    <div>
      {error && !loading && <MessageCard message={error} type="error" />}

      <div className="flex justify-center items-center">
        {loading && (
          <div className="flex justify-center h-60 items-center mt-5">
            <Loading />
          </div>
        )}

        {data && !loading && !error && <ProfileCard userInfo={data} />}
      </div>
      <div>
        {data && (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ReposList username={username} />
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};
export default ViewProfile;
