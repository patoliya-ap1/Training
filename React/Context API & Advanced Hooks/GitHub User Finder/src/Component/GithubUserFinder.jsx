import { useEffect, useRef, useState } from "react";
import UserCard from "./UserCard";
import Loading from "../Loading";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner from "./Banner";

const GithubUserFinder = () => {
  const [gitHubUserName, setGitHubUserName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const bannerArray = [Banner1, Banner2, Banner3];

  const [carasoulImagesIndex, setCarasoulImagesIndex] = useState(0);
  const [opacityState, setOpacityState] = useState(false);

  const handleUsernameInput = (e) => {
    const value = e.target.value;
    setGitHubUserName(value);
    if (value === "") {
      setUserInfo({});
    }
  };

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  async function fetchApi() {
    try {
      setLoading(true);
      const apiUrl = "https://api.github.com/users";

      const res = await fetch(`${apiUrl}/${gitHubUserName}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (res.status === 404) {
        throw new Error(`User Not Found with "${gitHubUserName}" Username`);
      } else if (!res.ok) {
        throw new Error("error while fetching userinfo");
      }

      const data = await res.json();
      setUserInfo(data);
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

  // banner Timer

  useEffect(() => {
    setInterval(() => {
      setCarasoulImagesIndex((prev) => {
        setOpacityState(false);

        if (bannerArray.length - 1 === prev) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setOpacityState(true);
    }, 3500);
  }, []);

  console.log(carasoulImagesIndex);

  return (
    <>
      <div className="flex justify-center flex-wrap mt-4 ">
        <div className="shadow-md p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md bg-slate-50 dark:bg-slate-800">
          <h1 className="mb-2 text-slate-500">Github Users Search</h1>
          <div>
            <input
              className="shadow rounded-md bg-white p-2 focus:outline-0 focus:bg-slate-200 dark:bg-gray-700 dark:focus:bg-slate-600 dark:placeholder-gray-400 animate-pulse focus:animate-none"
              type="text"
              placeholder="Enter Username"
              value={gitHubUserName}
              onChange={handleUsernameInput}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="flex justify-center flex-wrap mt-4 ">
          <div className="bg-red-200 text-red-500 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md dark:bg-red-400 dark:text-red-700">
            <p>{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex justify-center h-60 mt-5">
          <Loading />
        </div>
      )}

      {!userInfo.id && !loading && !error && (
        <div className="flex justify-center flex-wrap mt-4">
          <div className="p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md shadow-md dark:bg-gray-700">
            <div className="flex justify-center items-center h-60">
              <h3 className="text-slate-500 dark:text-gray-400">
                Please Search Username for Github Profile.
              </h3>
            </div>
          </div>
        </div>
      )}

      {userInfo.id && !loading && (
        <div className="flex justify-center">
          <UserCard userInfo={userInfo} />
        </div>
      )}

      {/* banner */}

      <Banner bannerImage={bannerArray[0]} opacityState={opacityState} />
    </>
  );
};
export default GithubUserFinder;
