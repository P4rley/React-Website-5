import React from "react";
import Video from "../video/video1.mp4";
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroHeadline,
  HeroDescription,
  HeroButton,
  HeroButtonLink,
  ArrowUpRight,
  HeroVideo,
  HeroVideoFile,
  HeroBg,
  HeroText,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroWrapper>
          <HeroBg></HeroBg>
          <HeroContent>
            <HeroHeadline>A Fully Integrated Digital Agency</HeroHeadline>
            <HeroDescription>
              <HeroText>
                Create beautiful agency website with Donkey that converts more
                visitors than any website
              </HeroText>
              <HeroButton>
                <HeroButtonLink>
                  Explore more <ArrowUpRight />
                </HeroButtonLink>
              </HeroButton>
            </HeroDescription>
          </HeroContent>
          <HeroVideo>
            <HeroVideoFile autoPlay loop muted src={Video} />
          </HeroVideo>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
