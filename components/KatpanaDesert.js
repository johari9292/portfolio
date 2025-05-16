import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DesertContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`;

const ImageSlider = styled.div`
  display: flex;
  width: 500%; /* 5 images */
  height: 100%;
  animation: slide 30s infinite;
  
  @keyframes slide {
    0% { transform: translateX(0); }
    20% { transform: translateX(-20%); }
    40% { transform: translateX(-40%); }
    60% { transform: translateX(-60%); }
    80% { transform: translateX(-80%); }
    100% { transform: translateX(0); }
  }
`;

const DesertImage = styled.img`
  width: 20%; /* 100% / 5 images */
  height: 100%;
  object-fit: cover;
`;

const MessageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  width: 90%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ConnectButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0056b3;
  }
`;

const KatpanaDesert = () => {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg/800px-Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Skardu_Katpana_Desert.jpg/1280px-Skardu_Katpana_Desert.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg/800px-Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Katpana_Desert_at_Skardu_%28Cold_Desert%29.jpg/1280px-Katpana_Desert_at_Skardu_%28Cold_Desert%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Unexpected_Snow_in_Katpana_Skardu.jpg/1280px-Unexpected_Snow_in_Katpana_Skardu.jpg'
  ];

  return (
    <DesertContainer>
      <ImageSlider>
        {images.map((src, index) => (
          <DesertImage key={index} src={src} alt={`Katpana Desert ${index + 1}`} />
        ))}
      </ImageSlider>
      
      <MessageOverlay>
        <Title>Welcome to My Portfolio</Title>
        <Description>
          As a Senior Software Engineer, I find inspiration in the breathtaking beauty of Katpana Desert in Skardu. 
          This unique cold desert, situated at an altitude of 2,226 meters above sea level, is one of the highest deserts in the world. 
          Its pristine white sand dunes, surrounded by snow-capped mountains, create a surreal landscape that perfectly mirrors my approach to software development - 
          combining technical precision with creative beauty.
          <br /><br />
          The domain name I've chosen reflects my deep connection with this extraordinary place, where the desert meets snow and mountains, 
          symbolizing the perfect blend of different elements - much like how we combine different technologies to create innovative solutions.
        </Description>
        <ConnectButton href="#contact">
          Connect with Me
        </ConnectButton>
      </MessageOverlay>
    </DesertContainer>
  );
};

export default KatpanaDesert; 