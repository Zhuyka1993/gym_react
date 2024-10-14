import React from "react";
import PropTypes from "prop-types";
import "../style/StyleForComponents.css";

const InfoSection = ({ imgSrc, title, items }) => {
  return (
    <div className="info-section">
      <div className="pictureLeft">
        <img
          src={`${process.env.PUBLIC_URL}/sol.jpg`}
          alt={title}
          className="info-image"
        />
      </div>
      <div className="infoRight">
        <h2 className="info-title">{title}</h2>
        <ul className="info-list">
          {items.map((item, index) => (
            <li key={index}>
              <span className="productName">{item.productName}</span>
              <span className="price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InfoSection;
