import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeading,
  ContactText,
  ContactButton,
  ContactButtonLink,
  ArrowUpRight,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactHeading>
            Want to Build Your Business More Attractive?
          </ContactHeading>
          <ContactText>We Should Talk</ContactText>
          <ContactButton>
            <ContactButtonLink>
              Contact Us <ArrowUpRight />
            </ContactButtonLink>
          </ContactButton>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
