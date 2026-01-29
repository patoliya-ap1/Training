import { useState, useEffect, lazy } from "react";
import Loading from "../Loading";

const UserCard = lazy(() => import("../Component/UserCard"));

const Profile = () => {
  const gitHubUserName = "patoliya-ap1";

  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  //   on MOunt

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="p-4 bg-slate-200 h-screen dark:bg-gray-900">
      <h2 className="text-center text-slate-400">Profile</h2>
      {/*  */}
      {error && (
        <div className="flex justify-center flex-wrap mt-4 ">
          <div className="bg-red-200 text-red-500 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md dark:bg-red-400 dark:text-red-700">
            <p>{error}</p>
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center mt-5">
          <Loading />
        </div>
      )}
      {!userInfo.id && !loading && !error && (
        <div className="flex justify-center flex-wrap mt-4   ">
          <div className="p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md shadow-md dark:bg-gray-700">
            <div className="flex justify-center items-center h-60">
              <h3 className="text-slate-500 dark:text-gray-400">
                Contact Developer for Github Profile.
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
    </div>
  );
};

export default Profile;
