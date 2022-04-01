import UseAxios from './UseAxios';

const ActivityData = () => {
  const { data, loading } = UseAxios(`http://localhost:3000/user/18/activity`);
  const { sessions } = data;
  return { sessions, loading };
};

export default ActivityData;