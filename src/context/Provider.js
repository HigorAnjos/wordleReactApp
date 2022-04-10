import React, { useState } from 'react';
import { node } from 'prop-types';
import Words from '../components/Words';
import Context from './Context';

function Provider({ children }) {
  const [board, setBoard] = useState(Words);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const onSelectLetter = (keyVal) => {
    const LIMIT_LINE = 4;
    if (currAttempt.letterPos > LIMIT_LINE) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos - 1,
    });
  };
  const onEnter = () => {
    const FIVE = 5;
    if (currAttempt.letterPos !== FIVE) return;
    setCurrAttempt({
      attempt: currAttempt.attempt + 1,
      letterPos: 0,
    });
  };

  const value = {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onSelectLetter,
    onDelete,
    onEnter,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
