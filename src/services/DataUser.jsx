import UseAxios from './UseAxios';

const DataUser = () => {
  const { data, loading } = UseAxios(`http://localhost:3000/user/18`)
  // console.log(data);
  const { userInfos, keyData, score } = data;

  return { userInfos, keyData, score, loading };
  };

export default DataUser;