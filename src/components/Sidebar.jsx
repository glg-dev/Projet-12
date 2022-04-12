import React from 'react';
import meditation from '../assets/img/meditation.svg';
import swimming from '../assets/img/swimming.svg';
import bike from '../assets/img/bike.svg';
import pump from '../assets/img/pump.svg';

/**
 *
 * @description Component to display the sidebar of the app
 * @return {JSX.Element}
 */
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <img src={meditation} alt='meditation' />
        </li>
        <li>
          <img src={swimming} alt='swimming' />
        </li>
        <li>
          <img src={bike} alt='bike' />
        </li>
        <li>
          <img src={pump} alt='pump' />
        </li>
      </ul>
      <div className="copyright">
        <span>Copyright, SportSee 2020</span>
      </div>
    </div>
  );
};

export default Sidebar;