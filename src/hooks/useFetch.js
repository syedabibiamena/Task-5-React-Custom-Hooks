import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch(() => {
          setError("Error: Fail to fetch");
          setLoading(false);
        });
    }, 3000); 
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;
