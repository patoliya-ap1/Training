import { useEffect, useRef, useState, lazy } from "react";
import Loading from "../Loading";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner from "./Banner";
import MessageCard from "./MessageCard";
import UserListCard from "./UserListCard";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
ErrorBoundary;

const UserCard = lazy(() => import("../Component/UserCard"));

const GithubUserFinder = () => {
  const [gitHubUserName, setGitHubUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const bannerArray = [Banner1, Banner2, Banner3];

  const handleUsernameInput = (e) => {
    const value = e.target.value;
    setGitHubUserName(value);
    if (value === "") {
      setUserInfo(null);
    }
  };

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  async function fetchApi() {
    try {
      setLoading(true);
      const apiUrl = "https://api.github.com/search/users";

      const res = await fetch(
        `${apiUrl}${gitHubUserName ? `?q=${gitHubUserName}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );

      if (res.status === 404) {
        throw new Error(`User Not Found with "${gitHubUserName}" Username`);
      } else if (!res.ok) {
        throw new Error("error while fetching userinfo");
      }

      const data = await res.json();
      setUserInfo(data.items);
      setError(null);
    } catch (error) {
      setUserInfo({});
      setError(error.message || "unknown error while fetching");
    } finally {
      setLoading(false);
    }
  }

  const isMount = useRef(false);

  //   no onMount + debounce

  useEffect(() => {
    if (!isMount.current || gitHubUserName.trim("") === "") {
      isMount.current = true;
      setError("");
      return;
    }
    let timerId;
    timerId = setTimeout(() => {
      fetchApi();
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [gitHubUserName]);

  console.log(userInfo);

  return (
    <>
      <div className="sticky top-20">
        <div className="flex flex-wrap mt-4">
          <div className="shadow-md p-4 w-full rounded-md bg-slate-50 dark:bg-slate-800 dark:shadow-slate-950 flex justify-center">
            <div>
              <h1 className="mb-2 text-slate-500">Github Users Search</h1>
              <div className="">
                <input
                  className="shadow-md rounded-md bg-white p-2 focus:outline-0 focus:bg-slate-200 dark:bg-gray-700 dark:focus:bg-slate-600 dark:placeholder-gray-400 animate-pulse focus:animate-none"
                  type="text"
                  placeholder="Enter Username"
                  value={gitHubUserName}
                  onChange={handleUsernameInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center h-60 items-center mt-5">
          <Loading />
        </div>
      )}

      {!userInfo && !loading && !error && (
        <MessageCard
          message="Please Search Username for Github Profile."
          type="message"
        />
      )}

      {userInfo?.length == 0 && !loading && !error && (
        <MessageCard message={`No user found for this username`} type="error" />
      )}

      {userInfo && !loading && (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-flow-col-5 gap-3 mt-3">
            {userInfo.map(({ avatar_url, login }) => {
              return <UserListCard profile={avatar_url} username={login} />;
            })}
          </div>
        </ErrorBoundary>
      )}

      <Banner bannerImage={bannerArray[0]} />
    </>
  );
};
export default GithubUserFinder;
