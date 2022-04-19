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
      <h4>Score</h4>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart data={scoreValue} innerRadius={80} barSize={10} startAngle={90} endAngle={450}>
          <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
          <RadialBar dataKey='value' background fill='#FF0000' cornerRadius={5} />
          <text x='50%' y='45%' textAnchor="middle" fontWeight='700' >{score*100}%</text>
          <text x='50%' y='55%' textAnchor="middle" fontSize='16' fill='grey' >de votre objectif</text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreChart.propTypes = {
  score : PropTypes.number.isRequired,
};

export default ScoreChart;