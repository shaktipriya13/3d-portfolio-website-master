import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

const Card = styled(motion.div)`
  width: 330px;
  background: rgba(28, 17, 7, 0.84);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 18px;
  border: 1px solid rgba(232, 146, 12, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(232, 146, 12, 0.50);
    box-shadow: 0 10px 48px rgba(232, 146, 12, 0.18),
      0 2px 12px rgba(0, 0, 0, 0.5);
    transform: translateY(-7px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(12, 8, 4, 0.90) 100%
  );
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 11px;
  border-radius: 100px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  background: rgba(232, 146, 12, 0.88);
  color: #fff;
  backdrop-filter: blur(6px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 20px 20px;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 17.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateText = styled.div`
  font-size: 11.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "90"};
`;

const Description = styled.div`
  font-size: 13.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Tag = styled.span`
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + "18"};
  border: 1px solid ${({ theme }) => theme.primary + "2e"};
  white-space: nowrap;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

const GhBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.22s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.28);
    color: ${({ theme }) => theme.text_primary};
  }
`;

const LiveBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #C0501A
  );
  border: 1px solid transparent;
  color: #fff;
  box-shadow: 0 0 18px ${({ theme }) => theme.primary + "44"};
  transition: all 0.22s ease;

  &:hover {
    box-shadow: 0 0 28px ${({ theme }) => theme.primary + "70"};
    filter: brightness(1.12);
  }
`;

const ProjectCard = ({ project }) => {
  const description = project.description || project.desc || "";
  const displayTags = (project.tags || []).filter((t) => t.trim()).slice(0, 6);

  return (
    <Card variants={cardVariants}>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
        <ImageOverlay />
        {project.category && (
          <CategoryBadge>{project.category}</CategoryBadge>
        )}
      </ImageWrapper>

      <Content>
        <Title>{project.title}</Title>
        <DateText>{project.date}</DateText>
        <Description>{description}</Description>

        {displayTags.length > 0 && (
          <Tags>
            {displayTags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
        )}

        <Actions>
          {project.github && (
            <GhBtn
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub size={15} />
              Code
            </GhBtn>
          )}
          {project.webapp && (
            <LiveBtn
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiExternalLink size={15} />
              Live Demo
            </LiveBtn>
          )}
        </Actions>
      </Content>
    </Card>
  );
};

export default ProjectCard;