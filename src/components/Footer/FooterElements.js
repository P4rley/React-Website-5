import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
`;
export const FooterWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 80px;

  @media screen and (min-width: 860px) {
    flex-direction: row;
    align-items: start;
  }
`;
export const FooterDesc = styled.p`
  text-align: center;

  @media screen and (min-width: 860px) {
    text-align: left;
  }
`;
export const FooterTitle = styled.h3`
  color: #29292b;
  font-size: 18px;
  font-weight: 700;
`;
export const FooterText = styled.p`
  margin: 1rem 0;
  color: grey;

  @media screen and (min-width: 1080px) {
    width: 250px;
  }
`;
export const FooterItemLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 860px) {
    align-items: start;
  }
`;
export const FooterItem = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin: 0 1rem;

  @media screen and (min-width: 860px) {
    align-items: start;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #29292b;
  font-weight: 600;
  margin: 0.5rem;
`;
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;

  @media screen and (min-width: 860px) {
    flex-direction: column;
  }
`;
export const SocialLink = styled(Link)`
  font-size: 1.5rem;
  color: #29292b;
  margin-top: 0.5rem;

  @media screen and (min-width: 1080px) {
    margin-bottom: 1rem;
  }
`;
