import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchApi(url, options) {
    try {
      if (!url) {
        throw new Error(`Please Provide Url For Fetch`);
      }
      setLoading(true);
      const res = await fetch(url, options);
      if (res.status === 404) {
        throw new Error(`Not Found For This User`);
      } else if (!res.ok) {
        throw new Error("Error While Fetching");
      }
      const data = await res.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message || "Unknown Error While Fetching");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi(url, options);
  }, [url]);

  return { data, loading, error };
};
