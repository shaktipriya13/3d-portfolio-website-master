import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";

const Nav = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  transition: background 0.35s ease, box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(9, 9, 23, 0.92)" : "rgba(9, 9, 23, 0.55)"};
  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "24px" : "10px")});
  -webkit-backdrop-filter: blur(
    ${({ $scrolled }) => ($scrolled ? "24px" : "10px")}
  );
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none"};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(133, 76, 230, 0.5) 30%,
      rgba(205, 28, 181, 0.5) 70%,
      transparent 100%
    );
    opacity: ${({ $scrolled }) => ($scrolled ? "1" : "0.5")};
    transition: opacity 0.35s ease;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 700;
  font-size: 17px;
  text-decoration: none;
  letter-spacing: 0.3px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 6px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 14.5px;
  cursor: pointer;
  transition: color 0.22s ease, background 0.22s ease;
  text-decoration: none;
  letter-spacing: 0.2px;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
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
    background: rgba(133, 76, 230, 0.08);

    &::after {
      transform: scaleX(1);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #cd1cb5
  );
  color: #fff;
  border: none;
  box-shadow: 0 0 18px ${({ theme }) => theme.primary + "45"};
  letter-spacing: 0.3px;

  &:hover {
    box-shadow: 0 0 28px ${({ theme }) => theme.primary + "70"};
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

const MobileIcon = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.12);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px 24px;
  background: rgba(17, 17, 28, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(133, 76, 230, 0.2);
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  z-index: 999;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-8px)"};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
`;

const MobileNavLink = styled.a`
  padding: 12px 14px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(133, 76, 230, 0.1);
  }
`;

const MobileGithubBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding: 12px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #cd1cb5);
  color: #fff;
  box-shadow: 0 0 18px ${({ theme }) => theme.primary + "40"};
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const NAV_LINKS = [
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo to="/">Shakti Priya | IIIT R</NavLogo>

        <NavItems>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} />
            GitHub
          </GithubButton>
        </ButtonContainer>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MobileIcon>
      </NavbarContainer>

      <MobileMenu $isOpen={isOpen}>
        {NAV_LINKS.map(({ label, href }) => (
          <MobileNavLink
            key={label}
            href={href}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </MobileNavLink>
        ))}
        <MobileGithubBtn
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={16} />
          GitHub Profile
        </MobileGithubBtn>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;