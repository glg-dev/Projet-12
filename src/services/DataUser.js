import UseAxios from './UseAxios';

const DataUser = () => {
  const { data, loading, error } = UseAxios(``)
  // console.log(data);
  const score = data.score? data.score : data.todayScore;
  const { userInfos, keyData } = data;

  return { userInfos, keyData, score, loading, error };
  };

export default DataUser;