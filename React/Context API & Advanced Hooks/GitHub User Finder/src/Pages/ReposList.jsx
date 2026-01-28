import { useParams } from "react-router-dom";
import RepoCard from "../Component/RepoCard";
import { FcFile } from "react-icons/fc";
import Loading from "../Loading";
import { useFetch } from "../Hooks/useFetch";

const ReposList = () => {
  const { username } = useParams();
  // const [reposList, setReposList] = useState();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const apiUrl = "https://api.github.com/users";
  const customUrl = `${apiUrl}/${username}/repos`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  const { data: reposList, loading, error } = useFetch(customUrl, options);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center space-x-2 shadow-md py-3 dark:bg-slate-700 dark:rounded-md">
        <h2 className="text-center text-slate-800 dark:text-slate-400">
          <span className="text-2xl text-slate-500 me-2 dark:text-slate-300">
            {username}
          </span>{" "}
          Repos List{" "}
        </h2>
        <span className="flex items-center space-x-1">
          <FcFile />
          <span className="text-2xl text-gray-600 dark:text-slate-300">
            {reposList?.length}
          </span>
        </span>
      </div>

      <div>
        {/* error */}

        {!loading && error && (
          <div className="mt-4 flex justify-center">
            <div className="bg-red-200 text-red-500 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md dark:bg-red-400 dark:text-red-700">
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* loading */}

        {loading && (
          <div className="flex justify-center mt-5">
            <Loading />
          </div>
        )}
      </div>

      <div className="flex justify-center mt-3">
        {!reposList && !loading && !error && (
          <div className="flex justify-center flex-wrap mt-4   ">
            <div className="p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md shadow-md dark:bg-gray-700">
              <div className="flex justify-center items-center h-60">
                <h3 className="text-slate-500 dark:text-gray-400">
                  Please Add Username in URl for Github Repos.
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {reposList &&
            !loading &&
            !error &&
            reposList?.map((repoInfo) => {
              return <RepoCard key={repoInfo.id} repoInfo={repoInfo} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ReposList;
