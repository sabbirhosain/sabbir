// TimeGreeting.js
import React, { useState, useEffect } from 'react';

const TimeGreeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = '';

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      newGreeting = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      newGreeting = 'Good Evening';
    } else {
      newGreeting = 'Good Night';
    }

    setGreeting(newGreeting);
  }, []);

  return <span>{greeting}</span>;
};

export default TimeGreeting;
