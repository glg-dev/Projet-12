import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import caloriesIcon from '../assets/img/calories-icon.svg'
import proteinIncon from '../assets/img/protein-icon.svg'
import carbsIcon from '../assets/img/carbs-icon.svg'
import fatIcon from '../assets/img/fat-icon.svg'
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import DataUser from '../services/DataUser';
import SkillsChart from '../components/SkillsChart';
import ScoreChart from '../components/ScoreChart';


const Home = () => {
  const { userInfos, keyData, score, loading } = DataUser()

  return (
    <div className='home'>
      <Header />
      <Sidebar />
      {loading ? (
        <div>Patientez, vos données sont en chargement...</div>
      ) : (
        <div className='home-content'>
          <div className='home-content-header'>  
            <h1>Bonjour <span className='firstname'>{userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className='home-content-body'>
            <div className='home-content-body-chart'>
              <ActivityChart />
              <AverageSessionsChart />
              <SkillsChart />
              <ScoreChart score={score} />
            </div>
            <div className="results">
              <Card icon={caloriesIcon} quantity={keyData.calorieCount} unity='kCal' type='Calories' />
              <Card icon={proteinIncon} quantity={keyData.proteinCount} unity='g' type='Proteines' />
              <Card icon={carbsIcon} quantity={keyData.carbohydrateCount} unity='g' type='Glucides' />
              <Card icon={fatIcon} quantity={keyData.lipidCount} type='Lipides' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;