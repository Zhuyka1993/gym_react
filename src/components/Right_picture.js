import React from 'react';
import PropTypes from 'prop-types';
import '../style/StyleForComponents.css';

const Right_picture = ({ imgSrc, title, items, id }) => {
  return (
    <div className='info-section-right' id={id}>
      
      <div className='infoLeft'>
      <h2 className='info-title'>{title}</h2>
      <div className='line'></div>
      <ul className='info-list'>
        {items.map((item, index) => (
          <li key={index}><span className='red'>- </span>{item}</li>
        ))}
      </ul>
      </div>
      <div className='pictureRight'>
      <img src={imgSrc} alt={title} className='info-image' />
      </div>
    </div>
  );
};

Right_picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Right_picture;