import { useEffect, useRef, useState } from "react";
import UserCard from "./UserCard";
import Loading from "../Loading";

const GithubUserFinder = () => {
  const [gitHubUserName, setGitHubUserName] = useState("");
  const [userInfo, setUserInfo] = useState({
    login: "john",
    id: 1668,
    node_id: "MDQ6VXNlcjE2Njg=",
    avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/john",
    html_url: "https://github.com/john",
    followers_url: "https://api.github.com/users/john/followers",
    following_url: "https://api.github.com/users/john/following{/other_user}",
    gists_url: "https://api.github.com/users/john/gists{/gist_id}",
    starred_url: "https://api.github.com/users/john/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/john/subscriptions",
    organizations_url: "https://api.github.com/users/john/orgs",
    repos_url: "https://api.github.com/users/john/repos",
    events_url: "https://api.github.com/users/john/events{/privacy}",
    received_events_url: "https://api.github.com/users/john/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "John McGrath",
    company: "RMI",
    blog: "",
    location: null,
    email: null,
    hireable: true,
    bio: "Product at @RMI. Ex-AWS Sustainability, co-founder @Entelo, dev @NYTimes and @WHOIGit. Interested in climate, renewable energy, journalism, and democracy.",
    twitter_username: null,
    public_repos: 62,
    public_gists: 2,
    followers: 197,
    following: 71,
    created_at: "2008-02-28T23:17:13Z",
    updated_at: "2025-12-11T20:49:06Z",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUsernameInput = (e) => {
    const value = e.target.value;
    setGitHubUserName(value);
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

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="border border-slate-200 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md">
          <h1 className="mb-2">Github Users Search</h1>
          <div>
            <input
              className="border border-slate-300 rounded-md p-2"
              type="text"
              placeholder="Enter Username"
              value={gitHubUserName}
              onChange={handleUsernameInput}
            />
          </div>
          <div>{error && <p className="mt-1 text-red-500">{error}</p>}</div>
        </div>
      </div>

      {loading && <Loading />}

      {userInfo.id && (
        <div className="flex justify-center">
          <UserCard userInfo={userInfo} />
        </div>
      )}
    </>
  );
};
export default GithubUserFinder;
