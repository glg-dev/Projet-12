import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import SessionsData from '../services/SessionsData';


/**
 *@name AverageSessionsChart
 *@description Component to display the session's durations
 *@param {number} {sessions}
 * @return {JSX.Element} 
 */
const AverageSessionsChart = () => {
  const { sessionsData, loading } = SessionsData()
  
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null;
  }

  return (
    <div className='average-sessions-chart'>
      <h4>Durée moyenne des sessions</h4>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <LineChart width={258} height={143} data={sessionsData}>
          <XAxis dataKey="day" padding={{ left: 20, right: 12}} axisLine={false} tickLine={false} tick={{fill : 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 500}} />
          <YAxis dataKey="sessionLength" hide />
          <Tooltip content={<CustomTooltip />} fill={'rgba(0,0,0,.1'} />
          <Line type='natural' dataKey='sessionLength' dot={false} stroke='#FFFFFF' strokeWidth={2} />
        </LineChart>
      )}
    </div>
  );
};

export default AverageSessionsChart;