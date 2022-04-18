import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import wordsDefault, { generateWordSet } from '../components/Words';
import Context from './Context';

function Provider({ children }) {
  const [board, setBoard] = useState(wordsDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

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

    let currWord = '';
    for (let i = 0; i < 5; i += 1) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert('Word not found');
    }

    if (currWord === correctWord) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      });
      return;
    }

    if (currAttempt.attempt === 4) {
      setGameOver({
        gameOver: true,
        guessedWord: false,
      });
    }
  };

  const value = {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onSelectLetter,
    onDelete,
    onEnter,
    correctWord,
    disabledLetters,
    setDisabledLetters,
    gameOver,
    setGameOver,
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
