import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background: #29292b;
  z-index: 999;
  transition: 0.5 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.8s ease-in-out;
`;
export const SidebarIcon = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  cursor: pointer;
  background: transparent;
  font-size: 30px;
  outline: none;
`;
export const CloseIcon = styled(AiOutlineClose)`
  color: #f8f9f9;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
`;
export const SidebarItem = styled.li`
  text-decoration: none;
`;
export const SidebarLinks = styled(LinkS)`
  font-size: 2rem;
  color: #f8f8f9;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #c9c9c9;
  }
`;
export const SidebarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const SidebarBtnLink = styled(LinkR)`
  text-decoration: none;
  margin-right: 10px;
  border: 2px solid #f8f8f9;
  padding: 10px 20px;
  border-radius: 30px;
  color: #f8f8f9;
  transition: 0.5s;
  font-weight: 500;

  &:hover {
    background: #c9c9c8;
    border: none;
    color: #29292b;
  }
`;

export const SidebarBtnIcon = styled(BiRightArrowAlt)`
  margin-left: 5px;
  transform: translateY(3px);
`;
