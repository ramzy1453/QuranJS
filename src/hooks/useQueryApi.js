import { useEffect, useState } from "react";
export function useGetMetaQuranData() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/meta")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, isLoading, isError };
}

export function useGetSourates(sourateID, translation) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${sourateID}${translation}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sourateID, translation]);
  return { data, isLoading, isError };
}
