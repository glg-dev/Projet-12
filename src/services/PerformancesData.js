import UseAxios from "./UseAxios";

const PerformancesData = () => {
  const { data, loading } = UseAxios(`performance`);
  if (data.data) {
    let result = data.data.map(item => {
      console.log(item);
      item.kind = isNaN(item.kind) ? item.kind : data.kind[item.kind]
      return item
    })
    // console.log(result);
    return { result };
  }
  return { data, loading };
};

export default PerformancesData;