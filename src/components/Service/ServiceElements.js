import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export const ServiceContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const ServiceWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ServiceContent = styled.div`
  text-align: center;

  @media screen and (min-width: 860px) {
    display: flex;
    align-items: center;
    text-align: left;
  }

  @media screen and (min-width: 1080px) {
    margin-bottom: 2rem;
  }
`;
export const ServiceHeadline = styled.h1`
  font-size: 32px;
  color: #29292b;

  @media screen and (min-width: 860px) {
    width: 300px;
    margin-right: 5rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 42px;
    width: 500px;
  }
`;
export const ServiceText = styled.p`
  font-size: 14px;
  margin: 2rem 0;
  color: grey;

  @media screen and (min-width: 860px) {
    width: 350px;
  }

  @media screen and (min-width: 1080px) {
    font-size: 20px;
    width: 500px;
  }
`;
export const ServiceCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1089px) {
    flex-direction: row;
  }
`;
export const ServiceCard = styled.div`
  position: relative;
  background: #f8f8f9;
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 10px;

  @media screen and (min-width: 860px) {
    width: 400px;
  }

  @media screen and (min-width: 1080px) {
    margin: 2rem;
  }
`;
export const CardIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.3rem;
  font-size: 2rem;
`;
export const CardHeading = styled.h2`
  margin-top: 3rem;
`;
export const CardDescription = styled.p`
  font-size: 14px;
  color: grey;
  margin: 1rem 0;
  width: 300px;
`;
export const CardButton = styled.div``;
export const CardButtonLink = styled(Link)`
  text-decoration: none;
  color: #29292b;
  font-weight: 500;
  font-size: 16px;
  transition: 0.5s;

  &:hover {
    color: grey;
  }
`;

export const ArrowRight = styled(BiRightArrowAlt)`
  transform: translateY(5px);
  font-size: 20px;
`;
