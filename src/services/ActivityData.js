import UseAxios from './UseAxios';

const ActivityData = () => {
  const { data, loading } = UseAxios(`activity`);
  const { sessions } = data;
  const activityData = [];
  if (sessions) {
    for (let day = 0; day < sessions.length; day++) {
      const dayStr = (day + 1).toString()
      activityData.push({
        day: dayStr,
        kilogram: sessions[day].kilogram,
        calories: sessions[day].calories
      })
    }
  }
  return { sessions, activityData, loading };
};

export default ActivityData;