import React, { useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Context from '../context/Context';
import Key from './Key';

const KeyboardDiv = styled.div`
  width: 700px;
  height: 300px;
  margin-top: 60px;
`;

const Line1 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 5px;
`;
const Line2 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;
const Line3 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

function Keyboard() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const { onEnter, onDelete, onSelectLetter, disabledLetters } = useContext(Context);

  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <KeyboardDiv onKeyDown={ handleKeyboard }>
      <Line1>
        {keys1.map((keyBord, i) => (
          <div key={ i }>
            <Key keyVal={ keyBord } disabled={ disabledLetters.includes(keyBord) } />
          </div>
        ))}
      </Line1>
      <Line2>
        {keys2.map((keyBord, i) => (
          <div key={ i }>
            <Key keyVal={ keyBord } disabled={ disabledLetters.includes(keyBord) } />
          </div>
        ))}
      </Line2>
      <Line3>
        <Key keyVal="ENTER" bigkey />
        {keys3.map((keyBord, i) => (
          <div key={ i }>
            <Key keyVal={ keyBord } disabled={ disabledLetters.includes(keyBord) } />
          </div>
        ))}
        <Key keyVal="DELETE" bigkey />
      </Line3>
    </KeyboardDiv>
  );
}

export default Keyboard;
