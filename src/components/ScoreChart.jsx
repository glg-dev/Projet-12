import React from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**
 *@name ScoreChart
 *@description Component to display the current percentage of the user's objectives
 * @param {number} {score}
 * @return {JSX.Element} 
 */

const ScoreChart = ({score}) => {
  const scoreValue = [{value: score}]
  return (
    <div className='score-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart data={scoreValue} innerRadius={80} barSize={10} startAngle={90} endAngle={450}>
          <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
          <RadialBar dataKey='value' background fill='#FF0000' />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreChart.propTypes = {
  score : PropTypes.number.isRequired,
};

export default ScoreChart;