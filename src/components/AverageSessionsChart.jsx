import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import SessionsData from '../services/SessionsData';
import PropTypes from 'prop-types';


/**
 *@name AverageSessionsChart
 *@description Component to display the session's durations
 *@param {number} {sessions}
 * @return {JSX.Element} 
 */
const AverageSessionsChart = () => {
  const { sessions, loading } = SessionsData()

  return (
    <div className='average-sessions-chart'>
      <h4>Durée moyenne des sessions</h4>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <LineChart width={258} height={143} data={sessions}>
          <XAxis dataKey="day" padding={{ left: 20, right: 12}} axisLine={false} tickLine={false} tick={{fill : 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 500}} />
          <YAxis dataKey="sessionLength" hide />
          <Tooltip />
          <Line type='natural' dataKey='sessionLength' dot={false} stroke='#FFFFFF' strokeWidth={2} />
        </LineChart>
      )}
    </div>
  );
};

AverageSessionsChart.propTypes = {
  sessions : PropTypes.arrayOf(
    PropTypes.shape({      
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  )
};

export default AverageSessionsChart;