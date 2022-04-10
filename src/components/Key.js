import React from 'react';
import styled from 'styled-components';

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

function Key({ keyVal, bigkey }) {
  return (
    <Wrapper id={ bigkey && 'big' }>{keyVal}</Wrapper>
  );
}

export default Key;
