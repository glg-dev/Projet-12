import UseAxios from "./UseAxios";

const PerformancesData = () => {
  const { data, loading } = UseAxios(`performance`);
  if (data.data) {
    let result = data.data.map(item => {
      item.kind = isNaN(item.kind) ? item.kind : data.kind[item.kind]
      return item
    })
    return { result };
  }
  return { data, loading };
};

export default PerformancesData;