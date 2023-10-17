import React from 'react';
import styled from 'styled-components';

const StyledBackButton = styled.button`
  font-family: Arial, sans-serif;
  text-align: center;
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BackButton = ({ onClick }) => (
  <StyledBackButton onClick={onClick}>{'<'}</StyledBackButton>
);

export default BackButton;
