import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import Loading from "../Loading";
import MessageCard from "./MessageCard";

const RepositoryDetails = () => {
  const { repositoryId } = useParams();

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const apiUrl = "https://api.github.com/repositories";
  const customUrl = `${apiUrl}/${repositoryId}`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  const { data: repoDetail, loading, error } = useFetch(customUrl, options);

  const dateFormat =
    repoDetail &&
    new Date(repoDetail.created_at).toDateString("default", {
      month: "short",
    });

  console.log(repoDetail);

  return (
    <div>
      {!repoDetail && !loading && error && (
        <MessageCard message={`No repository found for this ID`} type="error" />
      )}

      {loading && (
        <div className="flex justify-center h-60 items-center mt-5">
          <Loading />
        </div>
      )}

      {repoDetail && (
        <div className="p-4 grid grid-cols-3 gap-3">
          <div className="mb-5 shadow-md p-4 dark:shadow-slate-950 col-span-3">
            <p className="dark:text-slate-600">Repository:</p>
            <h2 className="text-5xl dark:text-slate-400 ">{repoDetail.name}</h2>
          </div>

          <div className="col-span-3 mb-5">
            <p className="dark:text-slate-600">Description</p>
            <p className="dark:text-slate-400 text-xl">
              {repoDetail.description}
            </p>
          </div>

          <div className="col-span-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Subscribers</p>
              <p className="dark:text-slate-400 text-2xl">
                {repoDetail.subscribers_count}
              </p>
            </div>

            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Language</p>
              <p className="dark:text-slate-400 text-2xl">
                {repoDetail.language || "unknown"}
              </p>
            </div>

            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Views</p>
              <p className="dark:text-slate-400 text-2xl">
                {repoDetail.watchers}
              </p>
            </div>
            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Visibility</p>
              <p className="dark:text-slate-400 text-2xl">
                {repoDetail.visibility}
              </p>
            </div>

            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Forks</p>
              <p className="dark:text-slate-400 text-2xl">{repoDetail.forks}</p>
            </div>

            <div className="shadow dark:shadow-slate-950 p-3">
              <p className="dark:text-slate-600">Created</p>
              <p className="dark:text-slate-400 text-2xl">{dateFormat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default RepositoryDetails;
