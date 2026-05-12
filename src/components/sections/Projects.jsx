import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  max-width: 580px;
  line-height: 1.75;
  margin: 20px 0 4px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 28px 0 16px;
`;

const FilterPill = styled.button`
  padding: 9px 22px;
  border-radius: 100px;
  border: 1.5px solid
    ${({ active, theme }) => (active ? theme.primary : theme.primary + "40")};
  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(135deg, ${theme.primary}28, #C0501A18)`
      : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.primary : theme.text_secondary};
  font-size: 13.5px;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  cursor: pointer;
  transition: all 0.22s ease;
  letter-spacing: 0.4px;
  box-shadow: ${({ active, theme }) =>
    active ? `0 0 18px ${theme.primary}28` : "none"};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + "18"};
  }

  @media (max-width: 768px) {
    padding: 7px 16px;
    font-size: 12px;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 26px;
  flex-wrap: wrap;
  padding: 8px 0 32px;
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
];

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filtered =
    toggle === "all"
      ? projects
      : projects.filter((p) => p.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <SectionLabel>Portfolio</SectionLabel>
        <Title>My Projects</Title>
        <TitleUnderline />
        <Desc>
          A showcase of full-stack, backend, and frontend work — from
          AI-powered platforms to real-time applications.
        </Desc>

        <FilterRow>
          {CATEGORIES.map(({ key, label }) => (
            <FilterPill
              key={key}
              active={toggle === key}
              onClick={() => setToggle(key)}
            >
              {label}
            </FilterPill>
          ))}
        </FilterRow>

        <CardContainer
          key={toggle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;