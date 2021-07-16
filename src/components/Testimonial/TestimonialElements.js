import styled from "styled-components";
import imageOne from "../images/image-1.jpg";

export const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const TestimonialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  margin: 3rem 0;
`;
export const TestimonialCard = styled.div`
  background: #f9f9f8;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem auto;

  @media screen and (min-width: 860px) {
    font-size: 18px;
    padding: 3rem;
    width: 500px;
  }

  @media screen and (min-width: 1080px) {
    width: 700px;
  }
`;
export const TestimonialData = styled.div`
  display: flex;
`;
export const TestimonialImg = styled.img`
  background: url(${imageOne});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
`;
export const TestimonialProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;
export const TestimonialName = styled.span`
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 860px) {
    font-size: 18px;
  }
`;
export const TestimonialJob = styled.p`
  font-size: 10px;
  color: grey;
`;
export const TestimonialDesc = styled.p`
  font-size: 11px;
  margin-top: 1rem;
  color: grey;

  @media screen and (min-width: 860px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1080px) {
    font-size: 18px;
  }
`;
