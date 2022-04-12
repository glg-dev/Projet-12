import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 *
 * @param {*} { icon, quantity, unity, type }
 * @description Component to display the amount of calories burned, proteins, fats, carbohydrates
 * @return {JSX.Element}} 
 */
const Card = ({ icon, quantity, unity, type }) => {
  return (
    <div className='card'>
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="content">
        <p className="quantity">{quantity}{unity}</p>
        <p className="type">{type}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Card.defaultProps = {
  icon: '',
  quantity: 0,
  unity: '',
  type: '',
};


export default Card;