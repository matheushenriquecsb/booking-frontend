import { useEffect, useState } from "react";
import axios from "axios";

export const apiURL = import.meta.env.VITE_BOOKING_API_URL;

const useFetch = (url: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
