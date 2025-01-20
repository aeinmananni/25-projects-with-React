/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useReactContext } from "../context";
//en-pQQwnFHzodbyazPAjH3OF4lQNPPyoYQv0rba_P7M
//https://api.unsplash.com/search/photos

export const useGetImages = () => {
  const { value } = useReactContext();
  const { data, fetchData } = useFetch<any[]>({
    baseUrl: `https://api.unsplash.com/search/photos?client_id=en-pQQwnFHzodbyazPAjH3OF4lQNPPyoYQv0rba_P7M&query=${value}`,
  });
  useEffect(() => {
    fetchData();
  }, [value]);

  return { data };
};
