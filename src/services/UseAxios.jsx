import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAxios = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data)
        setLoading(false)
      })
    }, [url])
    // console.log(data);
    return ({ data, loading });
  };

export default UseAxios;