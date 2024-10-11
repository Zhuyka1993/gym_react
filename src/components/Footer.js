import React from 'react';
import '../style/StyleForComponents.css';
const Footer = () => {
    return (
      <footer>
        <div className="social">
          <h3>Ми в соціальних сторінках</h3>
          
        </div>
        <div className="nav-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" style={{ width: '24px', height: '24px' }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/inst.png" alt="Instagram" style={{ width: '24px', height: '24px'}} /> 
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twit.png" alt="Twitter" style={{ width: '24px', height: '24px'}} />
          </a>
          <span className='phone'>Тел. гарячої лінії:<br/>
          0-800-500-615
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;

