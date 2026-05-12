import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
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

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  opacity: 0.9;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 6px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.primary} 55%,
    #C0501A 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TitleUnderline = styled.div`
  width: 56px;
  height: 4px;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #C0501A);
  border-radius: 2px;
  margin: 10px auto 0;
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 540px;
  line-height: 1.75;
  margin: 18px 0 8px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 32px;
  justify-content: center;
  padding-bottom: 20px;
`;

const SkillCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(28, 17, 7, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(232, 146, 12, 0.16);
  border-radius: 20px;
  padding: 28px 30px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      #C0501A,
      transparent
    );
  }

  &:hover {
    border-color: rgba(232, 146, 12, 0.40);
    box-shadow: 0 8px 40px rgba(232, 146, 12, 0.14),
      0 2px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 420px;
    padding: 22px 20px 18px;
  }

  @media (max-width: 500px) {
    max-width: 340px;
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 0.2px;
`;

const SkillDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #C0501A);
  flex-shrink: 0;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 100px;
  background: rgba(232, 146, 12, 0.08);
  border: 1px solid rgba(232, 146, 12, 0.22);
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13.5px;
  font-weight: 500;
  transition: all 0.22s ease;
  cursor: default;

  &:hover {
    background: rgba(232, 146, 12, 0.18);
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(232, 146, 12, 0.22);
  }

  @media (max-width: 768px) {
    font-size: 12.5px;
    padding: 7px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <SectionLabel>What I Know</SectionLabel>
        <Title>Technical Skills</Title>
        <TitleUnderline />
        <Desc>
          Technologies and tools I've been building with over the past 3 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt
              key={`skill-${index}`}
              options={{ max: 8, scale: 1.02, speed: 400 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.13 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <SkillCard>
                  <SkillCardHeader>
                    <SkillDot />
                    <SkillTitle>{skill.title}</SkillTitle>
                  </SkillCardHeader>
                  <SkillList>
                    {skill.skills.map((item, i) => (
                      <SkillItem key={`skill-item-${i}`}>
                        <SkillImage src={item.image} alt={item.name} />
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              </motion.div>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;