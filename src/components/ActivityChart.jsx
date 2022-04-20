import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import ActivityData from '../services/ActivityData';


/**
 *@name ActivityChart
 *@description Component to display the weight and the calories burned by the user
 *@param {number} {kilogram}
 *@param {number} {calorie}
 * @return {JSX.Element}} 
 */
const ActivityChart = () => {
  const { loading, activityData } = ActivityData();

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



  return (
    <div className='activity-chart'>
      <h4>Activité quotidienne</h4>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <BarChart width={835} height={300} data={activityData} barCategoryGap='54px'>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis dataKey='day' />
        <YAxis yAxisId="right" dataKey="kilogram" domain={['dataMin - 1', 'dataMax +1']} orientation='right' axisLine={false} tickLine={false} />
        <YAxis yAxisId="left" dataKey="calories" domain={[0, 'auto']} orientation='left' hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend marginBottom={10} align='right' verticalAlign='top' iconType='circle' iconSize={10} height={95}/>
        <Bar yAxisId="right" dataKey="kilogram" name='Poids(kg)' fill='#282D30' barSize={7} radius={[5, 5, 0, 0]} />
        <Bar yAxisId="left" dataKey="calories" name='Calories brûlées (kCal)' fill='#E60000' barSize={7} radius={[5, 5, 0, 0]} />
      </BarChart>
      )}
    </div>
  );
};

export default ActivityChart;