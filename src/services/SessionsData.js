import UseAxios from './UseAxios';

const SessionsData = () => {
  const { data, loading } = UseAxios(`average-sessions`);
  const { sessions } = data;
  if (sessions) {
    let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    let sessionsData = sessions.map((session, index) => {
      return {
        day: days[index],
        sessionLength: session.sessionLength,
      }
    })
    return { sessionsData, loading };
  }
  return { sessions };
};

export default SessionsData;