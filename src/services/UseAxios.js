import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAxios = (query) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  
  const userId = 18

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000/user/${userId}/` + query)
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
    }, [query])
    return ({ data, loading, error });
  };

export default UseAxios;