import { useParams } from "react-router-dom";
import RepoCard from "../Component/RepoCard";
import { FcFile } from "react-icons/fc";
import Loading from "../Loading";
import { useFetch } from "../Hooks/useFetch";
import { useCallback, useMemo, useState } from "react";

const ReposList = () => {
  const { username } = useParams();

  const [search, setSearch] = useState("");

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

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  // memoized function search

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const filtredReposFunction = useCallback(() => {
    return reposList?.filter(({ name }) =>
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [search, reposList]);

  //  memoized calculation sort

  const filtredRepos = useMemo(
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    () => filtredReposFunction(),
    [search, reposList],
  );

  //  memoized function sort

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const sortRepoDate = useCallback(() => {
    const sorted = filtredRepos?.toSorted(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    );
    return sorted;
  }, [search, reposList]);

  //  memoized calculation sort
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const latestRepos = useMemo(() => sortRepoDate(), [search, reposList]);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center space-x-2 shadow-md py-3 dark:bg-slate-700 dark:rounded-md">
        <h2
          className="text-center text-slate-800 dark:text-slate-400"
          onClick={() => setSearch("ada")}
        >
          <span className="text-2xl text-slate-500 me-2 dark:text-slate-300">
            {username}
          </span>{" "}
          Repos List{" "}
        </h2>
        <span className="flex items-center space-x-1">
          <FcFile />
          <span className="text-2xl text-gray-600 dark:text-slate-300">
            {latestRepos?.length || 0}
          </span>
        </span>
      </div>

      <div className="sticky top-19 z-30">
        <div className="p-4 bg-gray-300 flex justify-center items-center space-x-2 shadow-md py-3 dark:bg-slate-700 dark:rounded-md">
          <input
            type="text"
            placeholder="Search Repository"
            className="shadow-md p-2 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-md bg-white focus:outline-0 focus:bg-slate-200 dark:bg-gray-700 dark:focus:bg-slate-600 dark:placeholder-gray-400"
            onChange={handleSearchInput}
          />
        </div>
      </div>

      <div>
        {/* error */}

        {!loading && error && (
          <div className="mt-4 flex justify-center">
            <div className="bg-red-200 text-red-500 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md dark:bg-red-400 dark:text-red-700">
              <p>Repository {error}</p>
            </div>
          </div>
        )}

        {/* loading */}

        {loading && (
          <div className="flex justify-center h-60 items-center mt-5">
            <Loading />
          </div>
        )}

        {reposList && latestRepos?.length === 0 && !loading && !error && (
          <div className="flex justify-center flex-wrap mt-4   ">
            <div className="p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md shadow-md dark:bg-gray-700">
              <div className="flex justify-center items-center h-60">
                <h3 className="dark:text-red-300 text-red-400">
                  Repository Not Found with "{search}"" name
                </h3>
              </div>
            </div>
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
            latestRepos?.map((repoInfo) => {
              return <RepoCard key={repoInfo.id} repoInfo={repoInfo} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ReposList;
