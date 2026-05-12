import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
    #cd1cb5 100%
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
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #cd1cb5);
  border-radius: 2px;
  margin: 10px auto 0;
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;
  line-height: 1.75;
  margin: 18px 0 8px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 52px;
  width: 100%;
  max-width: 980px;
  margin-top: 40px;
  padding-bottom: 32px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 36px;
    max-width: 560px;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const InfoHeading = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  margin-bottom: 14px;
`;

const InfoHeadingAccent = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #cd1cb5
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const InfoText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 0 32px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactLinkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14.5px;
  font-weight: 500;
  transition: all 0.22s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    transform: translateX(4px);
  }
`;

const LinkIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.1);
  border: 1px solid rgba(133, 76, 230, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
  transition: all 0.22s ease;

  ${ContactLinkItem}:hover & {
    background: rgba(133, 76, 230, 0.2);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 14px ${({ theme }) => theme.primary + "40"};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary + "40"},
    transparent
  );
  margin: 28px 0;
`;

const AvailabilityChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 100px;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.28);
  font-size: 13px;
  font-weight: 500;
  color: #4ade80;
  width: fit-content;
`;

const GreenDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px #4ade8099;
  display: inline-block;
`;

const FormCard = styled(motion.form)`
  background: rgba(23, 23, 33, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(133, 76, 230, 0.15);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  overflow: hidden;

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
      #cd1cb5,
      transparent
    );
  }
`;

const FormHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputLabel = styled.label`
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary + "cc"};
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(133, 76, 230, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  transition: border-color 0.22s ease, box-shadow 0.22s ease,
    background 0.22s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + "55"};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133, 76, 230, 0.06);
    box-shadow: 0 0 0 3px rgba(133, 76, 230, 0.12);
  }
`;

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(133, 76, 230, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  resize: vertical;
  min-height: 110px;
  font-family: inherit;
  transition: border-color 0.22s ease, box-shadow 0.22s ease,
    background 0.22s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + "55"};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133, 76, 230, 0.06);
    box-shadow: 0 0 0 3px rgba(133, 76, 230, 0.12);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 13px 20px;
  border-radius: 100px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #cd1cb5
  );
  color: #fff;
  box-shadow: 0 0 20px ${({ theme }) => theme.primary + "50"};
  margin-top: 4px;
  width: 100%;

  &:hover:not(:disabled) {
    filter: brightness(1.12);
    box-shadow: 0 0 32px ${({ theme }) => theme.primary + "70"};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const StatusMsg = styled.div`
  font-size: 13.5px;
  font-weight: 500;
  text-align: center;
  color: ${({ $error }) => ($error ? "#f87171" : "#4ade80")};
  padding: 4px 0 0;
`;

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_fnp9wv8",
        "template_fq3zh6f",
        form.current,
        "iaCWNwbYcjKpPLclg"
      )
      .then(
        () => {
          setSending(false);
          setStatus({ ok: true, msg: "Message sent successfully! I'll get back to you soon." });
          form.current.reset();
        },
        (error) => {
          setSending(false);
          setStatus({ ok: false, msg: "Failed to send: " + error.text });
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <SectionLabel>Get In Touch</SectionLabel>
        <Title>Contact Me</Title>
        <TitleUnderline />
        <Desc>
          Have a question, project idea, or just want to say hi? My inbox is
          always open.
        </Desc>

        <ContactLayout>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <InfoHeading>
              Let's build something{" "}
              <InfoHeadingAccent>great together</InfoHeadingAccent>
            </InfoHeading>
            <InfoText>
              I'm currently open to full-time SWE/SDE roles and freelance
              projects. Whether you have an opportunity or just want to connect
              — feel free to reach out.
            </InfoText>

            <AvailabilityChip>
              <GreenDot />
              Available for opportunities
            </AvailabilityChip>

            <Divider />

            <ContactLinks>
              <ContactLinkItem
                href={`mailto:shaktipriya34@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIconBox>
                  <HiOutlineMail size={18} />
                </LinkIconBox>
                shaktipriya34@gmail.com
              </ContactLinkItem>

              <ContactLinkItem
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIconBox>
                  <FaLinkedin size={17} />
                </LinkIconBox>
                linkedin.com/in/shaktipriya13
              </ContactLinkItem>

              <ContactLinkItem
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIconBox>
                  <FaGithub size={17} />
                </LinkIconBox>
                github.com/shaktipriya13
              </ContactLinkItem>
            </ContactLinks>
          </ContactInfo>

          <FormCard
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <FormHeading>Send a Message</FormHeading>

            <InputGroup>
              <InputLabel>Your Email</InputLabel>
              <Input
                type="email"
                placeholder="you@example.com"
                name="from_email"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Your Name</InputLabel>
              <Input
                type="text"
                placeholder="Shreya Sharma"
                name="from_name"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Subject</InputLabel>
              <Input
                type="text"
                placeholder="Internship opportunity / Project collab"
                name="subject"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Message</InputLabel>
              <Textarea
                placeholder="Hi Shakti, I'd love to connect about..."
                name="message"
                rows={4}
                required
              />
            </InputGroup>

            <SubmitButton type="submit" disabled={sending}>
              <FaPaperPlane size={15} />
              {sending ? "Sending…" : "Send Message"}
            </SubmitButton>

            {status && (
              <StatusMsg $error={!status.ok}>{status.msg}</StatusMsg>
            )}
          </FormCard>
        </ContactLayout>
      </Wrapper>
    </Container>
  );
};

export default Contact;