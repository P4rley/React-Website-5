import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #29292b;
  margin: 2rem 0;
`;
export const ContactWrapper = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
export const ContactHeading = styled.h2`
  color: #f9f9f8;
  font-size: 1.5rem;

  @media screen and (min-width: 860px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1080px) {
    padding: 0 6rem;
    font-size: 3rem;
  }
`;
export const ContactText = styled.h1`
  color: #f9f9f8;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 860px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 860px) {
    font-size: 3.5rem;
  }
`;
export const ContactButton = styled.div``;
export const ContactButtonLink = styled(Link)`
  text-decoration: none;
  color: #29292b;
  background: #f9f9f8;
  padding: 10px 20px;
  border-radius: 30px;
  transition: 0.5s all ease;
  font-weight: 500;

  &:hover {
    background: grey;
  }
`;
export const ArrowUpRight = styled(FiArrowUpRight)`
  transform: translateY(3px);
  margin-left: 0.5rem;
`;
