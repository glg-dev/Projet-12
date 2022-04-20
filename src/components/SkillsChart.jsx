import React, { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import PerformancesData from '../services/PerformancesData';


/**
 *@name SkillsChart
 *@description Component to display users skills
 * @return {JSX.Element} 
 */
const SkillsChart = () => {
  const { result, loading } = PerformancesData()


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

export default SkillsChart;