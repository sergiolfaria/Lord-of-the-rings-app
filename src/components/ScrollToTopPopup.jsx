import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  visibility: ${(props) => (props.showPopup ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.showPopup ? 1 : 0)};
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }
`;


const ScrollToTopPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShowPopup(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <PopupContainer showPopup={showPopup} onClick={scrollToTop}>
      ^
    </PopupContainer>
  );
  
};

export default ScrollToTopPopup;
