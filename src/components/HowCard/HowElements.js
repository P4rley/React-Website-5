import styled from "styled-components";
import HowImgOne from "../images/image-2.jpg";
import HowImgTwo from "../images/image-1.jpg";
import HowImgThree from "../images/image-4.jpg";

export const HowContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const HowWrapper = styled.div`
  padding: 0 80px;
`;
export const HowHeadline = styled.h1`
  text-align: center;
  color: #29292b;

  @media screen and (min-width: 860px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;
export const HowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 860px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
`;
export const Card = styled.div`
  position: relative;
  width: 300px;
  background: #f9f9f8;
  margin-top: 2rem;
  border-radius: 10px;

  @media screen and (min-width: 860px) {
    margin: 1rem;
  }
`;
export const Number = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #29292b;
  padding: 5px 10px;
  font-weight: 600;
  color: #f9f9f8;
`;
export const HowImg = styled.img`
  background: url(${HowImgOne});
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;
export const HowImg2 = styled.img`
  background: url(${HowImgTwo});
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;
export const HowImg3 = styled.img`
  background: url(${HowImgThree});
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;
export const HowHeading = styled.h2`
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #29292b;
`;
export const HowDesc = styled.p`
  font-size: 14px;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;
