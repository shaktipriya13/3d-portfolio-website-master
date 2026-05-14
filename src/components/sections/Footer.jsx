import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const videoPublicId = process.env.REACT_APP_CLOUDINARY_VIDEO_PUBLIC_ID;
// q_auto: adaptive quality, f_auto: serves WebM/MP4 based on browser support
const VIDEO_URL =
  cloudName && videoPublicId
    ? `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoPublicId}`
    : "/videos/Video Project.mp4";

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.bg};
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(232, 146, 12, 0.6) 30%,
      rgba(192, 80, 26, 0.6) 70%,
      transparent 100%
    );
  }
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ── Two-column grid (desktop only) ── */
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* ── Left column: video + brand text ── */
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterVideo = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(232, 146, 12, 0.35);
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.3px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Tagline = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

/* ── Right column: social row + nav rows ── */
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(232, 146, 12, 0.08);
  border: 1px solid rgba(232, 146, 12, 0.22);
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.25s ease;
  text-decoration: none;

  &:hover {
    background: rgba(232, 146, 12, 0.18);
    border-color: rgba(232, 146, 12, 0.55);
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 18px rgba(232, 146, 12, 0.28);
    transform: translateY(-2px);
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #C0501A);
  color: #fff;
  border: none;
  box-shadow: 0 0 16px ${({ theme }) => theme.primary + "40"};
  letter-spacing: 0.3px;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 28px ${({ theme }) => theme.primary + "65"};
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

const RightNavGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(232, 146, 12, 0.4);
  flex-shrink: 0;
`;

const NavLink = styled.a`
  position: relative;
  padding: 5px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 13.5px;
  cursor: pointer;
  transition: color 0.22s ease, background 0.22s ease;
  text-decoration: none;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 12px;
    right: 12px;
    height: 1.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(232, 146, 12, 0.08);

    &::after {
      transform: scaleX(1);
    }
  }
`;

/* ── Divider ── */
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(232, 146, 12, 0.32) 30%,
    rgba(192, 80, 26, 0.32) 70%,
    transparent 100%
  );
`;

/* ── Bottom row: Copyright + Back to top ── */
const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 12px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary};
`;

const BackToTop = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  background: transparent;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(232, 146, 12, 0.3);
  letter-spacing: 0.3px;
  font-family: inherit;

  &:hover {
    background: rgba(232, 146, 12, 0.1);
    border-color: rgba(232, 146, 12, 0.6);
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 16px rgba(232, 146, 12, 0.22);
    transform: translateY(-1px);
  }
`;

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <FooterContainer>
      <FooterInner>
        <MainGrid>
          {/* ── Left half ── */}
          <LeftCol>
            <FooterVideo
              src={VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <BrandText>
              <Logo>Shakti Priya</Logo>
              <Tagline>Full Stack Developer · IIIT Ranchi '26</Tagline>
            </BrandText>
          </LeftCol>

          {/* ── Right half ── */}
          <RightCol>
            {/* Row 1: GitHub · LinkedIn · View Resume */}
            <RightActions>
              <SocialIcon
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub size={17} />
              </SocialIcon>
              <SocialIcon
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <LinkedIn fontSize="small" />
              </SocialIcon>
              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume ↗
              </ResumeButton>
            </RightActions>

            {/* Rows 2–3: Quick links split into 2 lines */}
            <RightNavGrid>
              <NavRow>
                <NavLink href="#About">About</NavLink>
                <NavDot />
                <NavLink href="#Skills">Skills</NavLink>
                <NavDot />
                <NavLink href="#Experience">Experience</NavLink>
              </NavRow>
              <NavRow>
                <NavLink href="#Projects">Projects</NavLink>
                <NavDot />
                <NavLink href="#Education">Education</NavLink>
              </NavRow>
            </RightNavGrid>
          </RightCol>
        </MainGrid>

        <Divider />

        {/* Copyright + back to top */}
        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()} Shakti Priya · Engineered with Creativity ✌️
          </Copyright>
          <BackToTop onClick={scrollToTop}>↑ Back to top</BackToTop>
        </BottomRow>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;