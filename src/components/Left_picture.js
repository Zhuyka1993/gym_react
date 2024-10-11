import React from 'react';
import PropTypes from 'prop-types';
import '../style/StyleForComponents.css';

const Left_picture = ({ imgSrc, title, items, id }) => {
  return (
    <div className='info-section' id={id}>
      <div className='pictureLeft'>
      <img src={imgSrc} alt={title} className='info-image' />
      </div>
      <div className='infoRight'>
      <h2 className='info-title'>{title}</h2>
      <div className='line'></div>
      <ul className='info-list'>
        {items.map((item, index) => (
          <li key={index}><span className='red'>- </span>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

Left_picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Left_picture;