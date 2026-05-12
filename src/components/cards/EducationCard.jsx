import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(22, 14, 6, 0.85);
  border: 1px solid rgba(232, 146, 12, 0.2);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(192, 80, 26, 0.1) 0px 4px 24px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(232, 146, 12, 0.5);
    box-shadow: rgba(232, 146, 12, 0.2) 0px 8px 36px;
    transform: translateY(-4px);
  }
`;

const AccentBar = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #E8920C, #FBB346, #C0501A);
  flex-shrink: 0;
`;

const Body = styled.div`
  padding: 22px 22px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SchoolRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
`;

const SchoolLogo = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid rgba(232, 146, 12, 0.25);
  background: rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

const SchoolName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DateText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #FBB346;
`;

const Degree = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.45;
  margin-bottom: 12px;
`;

const GradeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

const GradeLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.text_secondary};
`;

const GradeBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
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
  margin-bottom: 14px;
`;

const DescWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const DescText = styled.div`
  font-size: 12.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : "4")};
  -webkit-box-orient: vertical;
`;

const ToggleBtn = styled.button`
  background: none;
  border: none;
  padding: 6px 0 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #E8920C;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #FBB346;
  }
`;

const EducationCard = ({ education }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <AccentBar />
      <Body>
        <SchoolRow>
          {education?.img && (
            <SchoolLogo src={education.img} alt={education.school} />
          )}
          <SchoolInfo>
            <SchoolName>{education?.school}</SchoolName>
            <DateText>{education?.date}</DateText>
          </SchoolInfo>
        </SchoolRow>

        <Degree>{education?.degree}</Degree>

        <GradeRow>
          <GradeLabel>Grade</GradeLabel>
          <GradeBadge>{education?.grade}</GradeBadge>
        </GradeRow>

        {education?.desc && (
          <>
            <Divider />
            <DescWrapper>
              <DescText expanded={expanded}>{education.desc}</DescText>
              <ToggleBtn onClick={() => setExpanded((p) => !p)}>
                {expanded ? "▲ Show less" : "▼ Read more"}
              </ToggleBtn>
            </DescWrapper>
          </>
        )}
      </Body>
    </Card>
  );
};

export default EducationCard;
