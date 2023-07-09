import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const AnimatedCard = ({ imageSrc, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;
      if (isElementInViewport(card)) {
        card.classList.add('slide-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <Card ref={cardRef}>
      <CardMedia src={imageSrc} />
      <CardContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Card = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Hide initially */
  animation: ${slideIn} 1s forwards;
  animation-delay: 0.5s; /* Delay the animation */
`;

const CardMedia = styled.img`
  height: auto;
  width: 40vw;
`;

const CardContent = styled.div`
  width: 50vw;
  font-size: 1.5em;
  -webkit-box-shadow: 10px 10px 5gpx 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  h4{
    padding: 20px;
  }
  p{
    padding: 20px;
  }
`;
