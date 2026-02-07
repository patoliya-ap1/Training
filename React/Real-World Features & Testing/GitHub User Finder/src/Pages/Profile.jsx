import { useState, useEffect, lazy } from "react";
import Loading from "../Loading";
import ProfileCard from "../Component/ProfileCard";
import ReposList from "./ReposList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Component/ErrorFallback";
import MessageCard from "../Component/MessageCard";

const UserCard = lazy(() => import("../Component/UserCard"));

const Profile = () => {
  const gitHubUserName = "JohnHammond";

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
    <div>
      <div className="p-4 bg-slate-200  dark:bg-gray-900">
        <h2 className="text-center text-slate-400">Profile</h2>
        {/*  */}
        {error && (
          <MessageCard
            message="Contact Developer for Github Profile."
            type="message"
          />
        )}
        {loading && (
          <div className="flex justify-center mt-5">
            <Loading />
          </div>
        )}
        {!userInfo.id && !loading && !error && (
          <MessageCard
            message="Contact Developer for Github Profile."
            type="message"
          />
        )}
        {userInfo.id && !loading && (
          <div className="flex justify-center">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ProfileCard userInfo={userInfo} />
            </ErrorBoundary>
          </div>
        )}
      </div>

      <div>{userInfo.id && <ReposList username={gitHubUserName} />}</div>
    </div>
  );
};

export default Profile;
