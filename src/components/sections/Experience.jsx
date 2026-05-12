import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
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

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-left: 60px;

  &::before {
    content: "";
    position: absolute;
    left: 18px;
    top: 14px;
    bottom: 14px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      #E8920C,
      rgba(232, 146, 12, 0.4),
      transparent
    );
  }

  @media (max-width: 600px) {
    padding-left: 38px;
    &::before {
      left: 10px;
    }
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer working on different
          companies and projects.
        </Desc>
        <TimelineWrapper>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </TimelineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Experience;
