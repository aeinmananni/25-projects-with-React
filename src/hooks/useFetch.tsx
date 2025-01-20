/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T,>(value: { baseUrl: string }) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await axios.get(value.baseUrl);
      setState({ data: response.data, loading: false, error: null });
    } catch (error: any) {
      setState({
        data: null,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const addData = async (newData: Record<string, any>) => {
    setState({ ...state, loading: true });
    try {
      const response = await axios.post(value.baseUrl, newData);
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setState({
        ...state,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const deleteData = async (id: string | number) => {
    setState({ ...state, loading: true });
    try {
      await axios.delete(`${value.baseUrl}/${id}`);
      setState({ ...state, loading: false, error: null });
      fetchData();
    } catch (error: any) {
      setState({
        ...state,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    fetchData,
    addData,
    deleteData,
  };
};

export default useFetch;
