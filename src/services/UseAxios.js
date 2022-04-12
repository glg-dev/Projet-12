import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAxios = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    if (!url) return
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.error(err);
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [url])
    // console.log(data);
    return ({ data, loading, error });
  };

export default UseAxios;