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

  const data = []
  

  if (sessions) {
    for (let day = 0; day < sessions.length; day++) {
      const dayStr = (day + 1).toString()
      data.push({
        day: dayStr,
        kilogram: sessions[day].kilogram,
        calories: sessions[day].calories
      })
    }
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} kg`}</p>
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      )
    }
    return null;
  }

  const CustomLegend = ({ payload }) => {
    return (
      <div className="custom-legend">
        <ul className='legend-ul'>
          <li className="label">{`${payload[0].value} (kg)`}</li>
          <li className="label">{`${payload[1].value} (kCal)`}</li>
        </ul>
      </div>
    )
  }



  return (
    <div className='activity-chart'>
      <h4>Activité quotidienne</h4>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <BarChart width={835} height={300} data={data} barCategoryGap='54px'>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis dataKey='day' />
        <YAxis yAxisId="right" dataKey="kilogram" domain={['dataMin - 1', 'dataMax +1']} orientation='right' axisLine={false} tickLine={false} />
        <YAxis yAxisId="left" dataKey="calories" domain={[0, 'auto']} orientation='left' hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend marginBottom={10} align='right' verticalAlign='top' iconType='circle' iconSize={10} height={95} content={<CustomLegend />}/>
        <Bar yAxisId="right" dataKey="kilogram" fill='#282D30' barSize={7} radius={[5, 5, 0, 0]} />
        <Bar yAxisId="left" dataKey="calories" fill='#E60000' barSize={7} radius={[5, 5, 0, 0]} />
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