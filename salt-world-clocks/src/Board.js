/* eslint-disable */
import React from 'react';
import Clock from './Clock';
import './Board.css';

const Board = () => {
  const places = ['Europe/Stockholm', 'Europe/London', 'Europe/Paris', 'Europe/Moscow', 'Asia/Tokyo', 'America/New_York', 'America/Los_Angeles', 'America/Sao_Paulo']
  return <section className='container' data-testid="container"> {
    places.map((location, index) => {
      return <Clock key={index} timeZone={location} />
    })
    }
  </section>
};

export default Board;
