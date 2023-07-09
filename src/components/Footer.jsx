import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2023 Your Company. All rights reserved.</FooterText>
        <ContactDetails>
          <ContactItem>Email: example@example.com</ContactItem>
          <ContactItem>Phone: 123-456-7890</ContactItem>
          <ContactItem>Address: 123 Main St, City, Country</ContactItem>
        </ContactDetails>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  color: #888888;
  font-size: 14px;
  margin: 0;
`;

const ContactDetails = styled.div`
  margin-top: 10px;
`;

const ContactItem = styled.p`
  color: #888888;
  font-size: 12px;
  margin: 5px 0;
`;
