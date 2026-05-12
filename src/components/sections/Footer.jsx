import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

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
      rgba(133, 76, 230, 0.6) 30%,
      rgba(205, 28, 181, 0.6) 70%,
      transparent 100%
    );
  }
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* ── Row 1: Brand left | Social + Resume right ── */
const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
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
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const RightGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(133, 76, 230, 0.08);
  border: 1px solid rgba(133, 76, 230, 0.22);
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.25s ease;
  text-decoration: none;

  &:hover {
    background: rgba(133, 76, 230, 0.18);
    border-color: rgba(133, 76, 230, 0.55);
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 18px rgba(133, 76, 230, 0.28);
    transform: translateY(-2px);
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #cd1cb5);
  color: #fff;
  border: none;
  box-shadow: 0 0 16px ${({ theme }) => theme.primary + "40"};
  letter-spacing: 0.3px;
  font-family: inherit;

  &:hover {
    box-shadow: 0 0 28px ${({ theme }) => theme.primary + "65"};
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

/* ── Row 2: Horizontal nav strip ── */
const NavStrip = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 0;
`;

const NavDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(133, 76, 230, 0.4);
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 6px 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.22s ease, background 0.22s ease;
  text-decoration: none;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 14px;
    right: 14px;
    height: 1.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(133, 76, 230, 0.08);

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
    rgba(133, 76, 230, 0.3) 30%,
    rgba(205, 28, 181, 0.3) 70%,
    transparent 100%
  );
`;

/* ── Row 3: Copyright + Back to top ── */
const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 14px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const BackToTop = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 18px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  background: transparent;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(133, 76, 230, 0.3);
  letter-spacing: 0.3px;
  font-family: inherit;

  &:hover {
    background: rgba(133, 76, 230, 0.1);
    border-color: rgba(133, 76, 230, 0.6);
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 16px rgba(133, 76, 230, 0.2);
    transform: translateY(-1px);
  }
`;

const NAV_LINKS = [
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <FooterContainer>
      <FooterInner>
        {/* Brand + Social */}
        <TopRow>
          <Brand>
            <Logo>Shakti Priya</Logo>
            <Tagline>Full Stack Developer · IIIT Ranchi '26</Tagline>
          </Brand>

          <RightGroup>
            <SocialRow>
              <SocialIcon
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub size={18} />
              </SocialIcon>
              <SocialIcon
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <LinkedIn fontSize="small" />
              </SocialIcon>
            </SocialRow>
            <ResumeButton
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume ↗
            </ResumeButton>
          </RightGroup>
        </TopRow>

        {/* Horizontal nav links */}
        <NavStrip>
          {NAV_LINKS.map(({ label, href }, i) => (
            <React.Fragment key={label}>
              <NavLink href={href}>{label}</NavLink>
              {i < NAV_LINKS.length - 1 && <NavDot />}
            </React.Fragment>
          ))}
        </NavStrip>

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
