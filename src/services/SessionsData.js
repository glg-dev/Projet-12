import UseAxios from './UseAxios';

const SessionsData = () => {
  const { data, loading } = UseAxios(`http://localhost:3000/user/18/average-sessions`);
  const { sessions } = data;
  return { sessions, loading };
};

export default SessionsData;