import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
 
  return (
    <div className="accordion__item">
      <div className= {isActive ? 'accordion__title accordion__title_down' : 'accordion__title accordion__title_up'} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div></div>
      </div>
      {isActive && <div className="accordion__content">{content}</div>}
    </div>
  );
}

export default Accordion;
