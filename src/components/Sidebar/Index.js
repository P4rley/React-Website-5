import React from "react";
import {
  SidebarContainer,
  SidebarIcon,
  SidebarMenu,
  SidebarItem,
  SidebarLinks,
  SidebarButton,
  SidebarBtnLink,
  CloseIcon,
  SidebarBtnIcon,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarIcon onClick={toggle}>
          <CloseIcon />
        </SidebarIcon>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLinks to="home" onClick={toggle}>
              Home
            </SidebarLinks>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinks to="service" onClick={toggle}>
              Service
            </SidebarLinks>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinks to="testimonial" onClick={toggle}>
              Testimonial
            </SidebarLinks>
          </SidebarItem>
          <SidebarButton>
            <SidebarBtnLink>
              Contact us <SidebarBtnIcon />
            </SidebarBtnLink>
          </SidebarButton>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
