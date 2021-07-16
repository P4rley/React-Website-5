import styled from "styled-components";
import { BsCheckAll } from "react-icons/bs";
import imageOne from "../images/image-3.jpg";

export const DedicatedContainer = styled.div`
  margin: 10rem 0 5rem;
  width: 100%;
  height: 100%;
  background: #29292b;
  position: relative;

  @media screen and (min-width: 1080px) {
    height: 350px;
  }
`;
export const DedicatedWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 80px;

  @media screen and (min-width: 860px) {
    display: flex;
  }
`;
export const DedicatedContent = styled.div`
  @media screen and (min-width: 1080px) {
    margin-left: 2.5rem;
  }
`;
export const DedicatedHeadline = styled.h1`
  text-align: center;
  margin: 1rem 0;
  color: #f9f9fb;

  @media screen and (min-width: 1080px) {
    text-align: left;
    font-size: 2.5rem;
    width: 500px;
  }
`;
export const DedicatedList = styled.div`
  color: #f9f9fb;
`;
export const DedicatedListText = styled.div`
  display: flex;
`;
export const Check = styled(BsCheckAll)`
  @media screen and (min-width: 1080px) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  width: 300px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;

  @media screen and (min-width: 1080px) {
    font-size: 20px;
    width: 500px;
  }
`;
export const DedicatedBg = styled.div`
  width: 100%;
  height: 100%;
`;
export const Background = styled.img`
  @media screen and (min-width: 860px) {
    background: url(${imageOne});
    background-color: #29292b;
    width: 300px;
    height: 300px;
    background-size: cover;
    position: absolute;
    right: 0;
    top: 0;
    filter: grayscale(1);
  }

  @media screen and (min-width: 1080px) {
    width: 450px;
    height: 350px;
  }
`;
