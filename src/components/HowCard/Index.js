import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  HowContainer,
  HowWrapper,
  HowHeadline,
  HowCard,
  Card,
  Number,
  HowImg,
  HowImg2,
  HowImg3,
  HowHeading,
  HowDesc,
} from "./HowElements";

const How = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <HowContainer>
        <HowWrapper>
          <HowHeadline data-aos="fade-up">How Do We Work?</HowHeadline>
          <HowCard>
            <Card data-aos="flip-left">
              <Number>1</Number>
              <HowImg></HowImg>
              <HowHeading>User centered design</HowHeading>
              <HowDesc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                ipsam aut natus deleniti, eligendi impedit?
              </HowDesc>
            </Card>
            <Card data-aos="fade-up">
              <Number>2</Number>
              <HowImg2></HowImg2>
              <HowHeading>Scrum & agile movement</HowHeading>
              <HowDesc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                ipsam aut natus deleniti, eligendi impedit?
              </HowDesc>
            </Card>
            <Card data-aos="fade-right">
              <Number>3</Number>
              <HowImg3></HowImg3>
              <HowHeading>Continues Integration</HowHeading>
              <HowDesc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                ipsam aut natus deleniti, eligendi impedit?
              </HowDesc>
            </Card>
          </HowCard>
        </HowWrapper>
      </HowContainer>
    </>
  );
};

export default How;
