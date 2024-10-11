import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PictureSection = ({ imagesSet1, imagesSet2, altTextSet1, altTextSet2 }) => {
  const [activeSet, setActiveSet] = useState(1);

  return (
    <div className="pictureSection" id="gallery">
      <h2>Галерея зображень</h2>
      <div className="button-container">
        <button onClick={() => setActiveSet(1)} className={activeSet === 1 ? 'active' : ''}>
          Зал на Крещатику
        </button>
        <button onClick={() => setActiveSet(2)} className={activeSet === 2 ? 'active' : ''}>
          Зал на Лівобережній
        </button>
      </div>
      <div className="images-container">
        {activeSet === 1 && imagesSet1.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt="Правий  Берег" />
        ))}
        {activeSet === 2 && imagesSet2.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt="Лівий Берег" />
        ))}
      </div>
    </div>
  );
};

PictureSection.propTypes = {
  imagesSet1: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagesSet2: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PictureSection;