import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError("some random error: " + error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
