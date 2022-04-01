import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import ActivityData from '../services/ActivityData';
import PropTypes from 'prop-types';


/**
 *@name ActivityChart
 *@description Component to display the weight and the calories burned by the user
 *@param {number} {kilogram}
 *@param {number} {calorie}
 * @return {JSX.Element}} 
 */
const ActivityChart = () => {
  const { sessions, loading } = ActivityData();

  return (
    <div className='activity-chart'>
      <h4>Activité quotidienne</h4>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <BarChart width={835} height={126} data={sessions} barCategoryGap='54px'>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis dataKey='day' />
        <YAxis dataKey="kilogram" orientation='right' axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend align='right' verticalAlign='top' iconType='circle' />
        <Bar dataKey="kilogram" fill='#282D30' barSize={7} />
        <Bar dataKey="calories" fill='#E60000' barSize={7} />
      </BarChart>
      )}
    </div>
  );
};

ActivityChart.propTypes = {
  sessions : PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calorie: PropTypes.number.isRequired,
    })
  )
};


export default ActivityChart;