import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import NavLink from "../NavLink";

const DesktopHeader = () => {
  return (
    <Wrapper>
      <Side>
        <Logo />
      </Side>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Side />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};
  overflow-x: auto; // for flexible menu items

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1 1;
`;

export default DesktopHeader;
