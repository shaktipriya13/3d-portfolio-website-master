import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const EarthWrapper = styled.div`
  width: 100%;
  height: 420px;
  margin-top: 40px;
  position: relative;

  /* Top fade — blends Earth into section above */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.bg} 0%,
      transparent 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  /* Bottom fade — blends Earth into Contact section below */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 140px;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.bg} 0%,
      transparent 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Education = () => {
  const earthRef = useRef(null);
  const [showEarth, setShowEarth] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEarth(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (earthRef.current) observer.observe(earthRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <CardGrid>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </CardGrid>

        <EarthWrapper ref={earthRef}>
          {showEarth && <EarthCanvas />}
        </EarthWrapper>
      </Wrapper>
    </Container>
  );
};

export default Education;
