import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  height: 100%;
  width: 100%;
`;
export const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: #29292b;
  z-index: -1;
`;
export const HeroContent = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: 860px) {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
  }
`;
export const HeroHeadline = styled.h1`
  font-size: 32px;
  color: #f9f9f8;

  @media screen and (min-width: 1024px) {
    width: 500px;
    font-size: 42px;
  }
`;
export const HeroDescription = styled.div`
  @media screen and (min-width: 1024px) {
    margin-left: 3rem;
  }
`;

export const HeroText = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  color: #c9c9c9;

  @media screen and (min-width: 860px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    width: 450px;
    font-size: 20px;
  }
`;
export const HeroButton = styled.div`
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }

  @media screen and (min-width: 860px) {
    &:hover {
      transform: scale(1);
    }
  }
`;
export const HeroButtonLink = styled(Link)`
  text-decoration: none;
  color: #f9f9f8;
  transition: 0.3s ease;

  &:hover {
    color: #c9c9c8;
  }

  @media screen and (min-width: 860px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
export const ArrowUpRight = styled(FiArrowUpRight)`
  margin-left: 5px;
  transform: translateY(3px);
`;
export const HeroVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroVideoFile = styled.video`
  width: 350px;
  border-radius: 5px;

  @media screen and (min-width: 860px) {
    width: 600px;
  }
`;
