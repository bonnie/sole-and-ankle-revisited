import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";

const MainHeader = () => {
  return (
    <Wrapper>
      <Side>
        <Logo />
      </Side>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
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
  height: 72px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray[900]};
  font-weight: ${(props) => props.theme.weights.medium};

  &:first-of-type {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default MainHeader;
