import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { BiRightArrowAlt } from "react-icons/bi";

export const Nav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: 0.5s ease-in-out;
  padding: ${({ scrollNav }) => (scrollNav ? "20px 80px" : "40px 80px")};
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
`;
export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLogo = styled(LinkR)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #f9f9f8;
  cursor: pointer;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  font-size: 20px;
  color: #f9f9f8;
  cursor: pointer;

  @media screen and (min-width: 860px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: none;

  @media screen and (min-width: 860px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 6rem;
  }
`;
export const NavItems = styled.li`
  margin: 0 1rem;
`;
export const NavLinks = styled(LinkS)`
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  color: #f9f9f8;

  &:hover {
    color: #c9c9c8;
  }
`;
export const NavButton = styled.div`
  display: none;

  @media screen and (min-width: 860px) {
    display: flex;
    align-items: center;
  }
`;
export const NavButtonLink = styled(LinkR)`
  text-decoration: none;

  @media screen and (min-width: 860px) {
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
    font-size: 18px;
    width: 190px;
    padding: 10px 30px;
    text-align: center;
    border-radius: 30px;
    color: #f8f8f9;
    transition: 0.5s;
    border: 2px solid #f9f9f8;

    &:hover {
      background: #f9f9f8;
      color: #29292b;
    }
  }
`;

export const NavBtnIcon = styled(BiRightArrowAlt)`
  transform: translateY(3px);
`;
