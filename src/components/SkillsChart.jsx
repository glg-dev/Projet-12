import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import PerformancesData from '../services/PerformancesData';
import PropTypes from 'prop-types';


/**
 *@name SkillsChart
 *@description Component to display users skills
 * @return {JSX.Element} 
 */
const SkillsChart = () => {
  const { data, loading } = PerformancesData()
  console.log(data);
  console.log(data.kind);

  return (
    <div className='skills-chart'>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <RadarChart width={258} height={263} data={data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickSize={10} tick={{fill: '#FFF', fontSize: 10}} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey='kind' fill="#FF0101" fillOpacity={0.71} />
        </RadarChart>
      )}
    </div>
  );
};

SkillsChart.propTypes = {
  data : PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  )
};

export default SkillsChart;