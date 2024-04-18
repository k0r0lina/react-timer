import React, { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Container from './components/Container/Container';
import Button from './components/Button/Button';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 10);
    }, 10);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <Container> 
      <FormattedTime time={currentTime} />
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
};

export default App;