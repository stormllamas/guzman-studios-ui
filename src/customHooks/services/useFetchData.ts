import { useState } from "react";

import { AxiosRequestConfig } from "axios";
import { api } from "utils";

const useFetchData = <T>(
  url: string,
  config?: AxiosRequestConfig<any>,
  fetcher = api.get<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetcher(url, config);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getData };
};

export default useFetchData;
