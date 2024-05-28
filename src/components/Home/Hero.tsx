"use client";

import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0070f3, #00f3a0);
  color: white;
  text-align: center;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const HeroButton = styled.a`
  background: white;
  color: #0070f3;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.25rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Welcome to Car Resellers</HeroTitle>
      <HeroSubtitle>Your trusted partner in finding the best cars</HeroSubtitle>
      <HeroButton href="#features">Explore Features</HeroButton>
    </HeroSection>
  );
};

export default Hero;
