import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context/Context';

const Wrapper = styled.div`
  width: 50px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

function Key({ keyVal, bigkey, disabled = '' }) {
  const {
    onSelectLetter,
    onDelete,
    onEnter,
  } = useContext(Context);

  const setSelectedLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <Wrapper
      id={ bigkey ? 'big' : disabled && 'disabled' }
      onClick={ setSelectedLetter }
    >
      {keyVal}
    </Wrapper>
  );
}

export default Key;
