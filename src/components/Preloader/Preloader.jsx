import React from 'react';
import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="container">
        <div className="preloader__wrap">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  )
}
