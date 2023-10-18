import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const StyledBackButton = styled.button`
  font-family: Arial, sans-serif;
  text-align: center;
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
  background:  #fdad00;
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
  <StyledBackButton onClick={onClick}>{<FontAwesomeIcon icon={ faArrowUp } rotation={270} style={{color: "#fff",}} />}</StyledBackButton>
);

export default BackButton;
