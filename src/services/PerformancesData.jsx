import UseAxios from "./UseAxios";

const PerformancesData = () => {
  const { data, loading } = UseAxios(`http://localhost:3000/user/18/performance`);
  return { data, loading };
};

export default PerformancesData;