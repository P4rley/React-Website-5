import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavButton,
  NavButtonLink,
  NavBtnIcon,
} from "./NavbarElements";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            DONKEY
          </NavLogo>

          <NavMenu>
            <NavItems>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Home
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="service"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Service
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Testimonial
              </NavLinks>
            </NavItems>
          </NavMenu>

          <NavButton>
            <NavButtonLink>
              Contact us <NavBtnIcon />
            </NavButtonLink>
          </NavButton>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
