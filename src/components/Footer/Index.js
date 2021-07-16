import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {
  FooterContainer,
  FooterWrapper,
  FooterItem,
  FooterTitle,
  FooterDesc,
  FooterLink,
  FooterSocial,
  SocialLink,
  FooterText,
  FooterItemLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterDesc>
            <FooterTitle>Donkey</FooterTitle>
            <FooterText>
              Create beautiful agency website with Donkey that converts more
              visitors than any website
            </FooterText>
          </FooterDesc>
          <FooterItemLink>
            <FooterItem>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Why Us</FooterLink>
              <FooterLink to="/">Information</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Our Team</FooterLink>
            </FooterItem>
          </FooterItemLink>
          <FooterSocial>
            <SocialLink href="/" target="_blank" aria-label="Facebook">
              <FiFacebook />
            </SocialLink>
            <SocialLink href="/" target="_blank" aria-label="Instagram">
              <FiInstagram />
            </SocialLink>
            <SocialLink href="/" target="_blank" aria-label="Twitter">
              <FiTwitter />
            </SocialLink>
          </FooterSocial>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
