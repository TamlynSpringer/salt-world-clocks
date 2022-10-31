/* eslint-disable */
import { React, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import './Clock.css'

const date = (timezone) => {
  const datetest = DateTime.now().setZone(timezone);
  const hour = datetest.c.hour;
  const min = datetest.c.minute;
  const sec = datetest.c.second;
  const dateTime = `${hour}:${min}:${sec}`;
  return dateTime
};

const formatLocation = (location) => {
  return location.replace(/(.*\/)/gi, '').replace(/\_/, ' ');
}

const Clock = ( props ) => {
  const [time, setTime] = useState(date(props.timeZone));
  
  useEffect(()=>{
    setTimeout(() => {
      setTime(date(props.timeZone))
    }, 1000)
  }, [time])

  return <article className='article'>
    <h3>{time}</h3>
    <p>{formatLocation(props.timeZone)}</p>
  </article>
};

export default Clock;
