import React, { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import PerformancesData from '../services/PerformancesData';
import PropTypes from 'prop-types';


/**
 *@name SkillsChart
 *@description Component to display users skills
 * @return {JSX.Element} 
 */
const SkillsChart = () => {
  const [result, setResult] = useState([]);
  const { data, loading } = PerformancesData()

  useEffect(() => {
    if (data?.data) {
      setResult(data?.data.map(item => {
        item.kind = data.kind[item.kind]
        return item
      }))
    }
  }, [data])

  return (
    <div className='skills-chart'>
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <RadarChart width={258} height={263} data={result} outerRadius={90} startAngle={-150} endAngle={210}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickSize={10} tick={{fill: '#FFF', fontSize: 10}} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey='value' fill="#FF0101" fillOpacity={0.71} />
        </RadarChart>
      )}
    </div>
  );
};

// SkillsChart.propTypes = {
//   data : PropTypes.arrayOf(
//     PropTypes.shape({
//       kind: PropTypes.string.isRequired,
//       value: PropTypes.number.isRequired,
//     })
//   )
// };

export default SkillsChart;