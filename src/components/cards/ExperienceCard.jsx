import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -49px;
    top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #E8920C;
    border: 3px solid #0C0804;
    box-shadow: 0 0 0 2px #E8920C, 0 0 14px rgba(232, 146, 12, 0.7);
    z-index: 1;
  }

  @media (max-width: 600px) {
    &::before {
      left: -35px;
    }
  }
`;

const Card = styled.div`
  background: rgba(22, 14, 6, 0.85);
  border: 1px solid rgba(232, 146, 12, 0.2);
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: rgba(192, 80, 26, 0.1) 0px 4px 24px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(232, 146, 12, 0.5);
    box-shadow: rgba(232, 146, 12, 0.2) 0px 8px 36px;
    transform: translateY(-3px);
  }

  @media (max-width: 600px) {
    padding: 18px 16px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 8px;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid rgba(232, 146, 12, 0.25);
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(232, 146, 12, 0.6);
    box-shadow: 0 0 10px rgba(232, 146, 12, 0.35);
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #E8920C, #FBB346);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CompanyLink = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s ease;

  &:hover {
    color: #FBB346;
  }

  &::after {
    content: "↗";
    font-size: 11px;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

const Badge = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 3px 12px;
  border-radius: 20px;
  background: rgba(232, 146, 12, 0.12);
  border: 1px solid rgba(232, 146, 12, 0.35);
  color: #FBB346;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin-bottom: 16px;
`;

const DescList = styled.ul`
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DescItem = styled.li`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "▹";
    color: #E8920C;
    font-size: 14px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  @media (max-width: 768px) {
    font-size: 13px;

    &.mobile-collapsed {
      display: none;
    }
  }
`;

const ReadMoreBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: #E8920C;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-top: 4px;
  margin-bottom: 8px;
  letter-spacing: 0.03em;

  &:hover {
    color: #FBB346;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const SkillsLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + "cc"};
  border: 1px solid ${({ theme }) => theme.text_primary + "33"};
  border-radius: 8px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(232, 146, 12, 0.55);
    background: rgba(232, 146, 12, 0.1);
    color: #FBB346;
  }
`;

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const desc = experience?.desc ?? [];
  const hasMore = desc.length > 1;

  return (
    <CardWrapper>
      <Card>
        <HeaderTop>
          {experience?.img && (
            <a
              href={experience?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ lineHeight: 0 }}
            >
              <CompanyLogo src={experience.img} alt={experience.company} />
            </a>
          )}
          <HeaderInfo>
            <Role>{experience?.role}</Role>
            <CompanyLink
              href={experience?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience?.company}
            </CompanyLink>
          </HeaderInfo>
        </HeaderTop>
        <MetaRow>
          {experience?.date && <Badge>{experience.date}</Badge>}
          {experience?.location && <Badge>📍 {experience.location}</Badge>}
        </MetaRow>

        {desc.length > 0 && (
          <>
            <Divider />
            <DescList>
              {desc.map((point, i) => (
                <DescItem
                  key={i}
                  className={i > 0 && !expanded ? "mobile-collapsed" : undefined}
                >
                  {point}
                </DescItem>
              ))}
            </DescList>
            {hasMore && (
              <ReadMoreBtn onClick={() => setExpanded((v) => !v)}>
                {expanded ? "Show less ▲" : `Read more ▼`}
              </ReadMoreBtn>
            )}
          </>
        )}

        {experience?.skills?.length > 0 && (
          <>
            <SkillsLabel>Skills & Technologies</SkillsLabel>
            <SkillsWrap>
              {experience.skills.map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
            </SkillsWrap>
          </>
        )}
      </Card>
    </CardWrapper>
  );
};

export default ExperienceCard;
