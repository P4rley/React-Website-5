import React, { useEffect } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServiceContainer,
  ServiceWrapper,
  ServiceContent,
  ServiceHeadline,
  ServiceText,
  ServiceCardWrapper,
  ServiceCard,
  CardIcon,
  CardHeading,
  CardDescription,
  CardButton,
  CardButtonLink,
  ArrowRight,
} from "./ServiceElements";

const Service = ({
  id,
  heading,
  text,
  cardHeading,
  cardDesc,
  buttonLabel,
  cardHeading2,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ServiceContainer id={id}>
        <ServiceWrapper>
          <ServiceContent data-aos="fade-up">
            <ServiceHeadline>{heading}</ServiceHeadline>
            <ServiceText>{text}</ServiceText>
          </ServiceContent>
          <ServiceCardWrapper>
            <ServiceCard data-aos="fade-right">
              <CardIcon>
                <HiOutlineDesktopComputer />
              </CardIcon>
              <CardHeading>{cardHeading}</CardHeading>
              <CardDescription>{cardDesc}</CardDescription>
              <CardButton>
                <CardButtonLink>
                  {buttonLabel} <ArrowRight />
                </CardButtonLink>
              </CardButton>
            </ServiceCard>

            <ServiceCard data-aos="fade-left">
              <CardIcon>
                <CgWebsite />
              </CardIcon>
              <CardHeading>{cardHeading2}</CardHeading>
              <CardDescription>{cardDesc}</CardDescription>
              <CardButton>
                <CardButtonLink>
                  {buttonLabel} <ArrowRight />
                </CardButtonLink>
              </CardButton>
            </ServiceCard>
          </ServiceCardWrapper>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Service;
