import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
`;

const gradientSpin = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 88px 30px 100px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px 80px;
  }

  @media (max-width: 640px) {
    padding: 40px 16px 60px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  @media (max-width: 960px) {
    order: 2;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px 6px 10px;
  border-radius: 100px;
  background: rgba(232, 146, 12, 0.1);
  border: 1px solid rgba(232, 146, 12, 0.28);
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  width: fit-content;
`;

const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px #4ade8099;
  animation: ${pulse} 2.2s ease-in-out infinite;
  display: inline-block;
  flex-shrink: 0;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 52px;
  line-height: 1.18;
  margin-bottom: 4px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const TitleGreeting = styled.span`
  color: ${({ theme }) => theme.text_primary};
`;

const TitleName = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.primary} 55%,
    #C0501A 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 14px;
  margin-bottom: 18px;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    font-size: 22px;
  }
`;

const TypewriterSpan = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 480px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 15px;
    max-width: 520px;
  }
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 28px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.28s ease;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #C0501A);
  background-size: 200% 200%;
  animation: ${gradientSpin} 4s ease infinite;
  color: #fff;
  box-shadow: 0 0 24px ${({ theme }) => theme.primary + "55"},
    0 4px 16px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 38px ${({ theme }) => theme.primary + "80"},
      0 6px 24px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }
`;

const SocialBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid rgba(232, 146, 12, 0.35);
  background: rgba(232, 146, 12, 0.08);
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  transition: all 0.22s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(232, 146, 12, 0.18);
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 0 14px ${({ theme }) => theme.primary + "40"};
  }
`;

const ImageGlowWrapper = styled(motion.div)`
  animation: ${float} 4s ease-in-out infinite;
  position: relative;
  width: 360px;
  height: 360px;

  &::before {
    content: "";
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => theme.primary + "30"} 0%,
      transparent 70%
    );
    filter: blur(20px);
  }

  @media (max-width: 640px) {
    width: 260px;
    height: 260px;
  }
`;

const ImgRing = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #C0501A, ${({ theme }) => theme.primary});
  background-size: 200% 200%;
  animation: ${gradientSpin} 3.5s ease infinite;
`;

const ImgInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <StatusBadge>
                  <StatusDot />
                  Available for Opportunities
                </StatusBadge>

                <Title>
                  <TitleGreeting>Hi, I am</TitleGreeting>
                  <br />
                  <TitleName>{Bio.name}</TitleName>
                </Title>

                <TextLoop>
                  I am a&nbsp;
                  <TypewriterSpan>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </TypewriterSpan>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>

                <CTARow>
                  <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                    <HiOutlineDocumentText size={18} />
                    Check Resume
                  </ResumeButton>

                  <SocialBtn href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={18} />
                  </SocialBtn>

                  <SocialBtn href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                  </SocialBtn>
                </CTARow>
              </motion.div>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt options={{ max: 12, scale: 1.02, speed: 400 }}>
                  <ImageGlowWrapper>
                    <ImgRing>
                      <ImgInner>
                        <HeroImg src="/images/profile.png" alt={Bio.name} />
                      </ImgInner>
                    </ImgRing>
                  </ImageGlowWrapper>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;