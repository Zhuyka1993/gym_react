import React from 'react';
import PropTypes from 'prop-types';
import '../style/StyleForComponents.css';

const LinkItem = ({ href, imgSrc, altText, text, bgClass }) => {
  return (
    <a className={`link_item ${bgClass}`} href={href}>
      <img src={imgSrc} alt={altText} />
      <span className="link-info">{text}</span>
    </a>
  );
}

LinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  text: PropTypes.string.isRequired,
  bgClass: PropTypes.string.isRequired,
};

export default LinkItem;