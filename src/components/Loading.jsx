import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingContainer = styled.div`
  font-size: 10vh;
  color: white;
`;

const Spinner = styled(FontAwesomeIcon)`
  animation: spin 1s linear infinite;
  color: white;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading = () => (
  <LoadingContainer>
    <Spinner icon={faSpinner} /> Carregando...
  </LoadingContainer>
);

export default Loading;
