/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import NavLink from "../NavLink";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, handleDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={handleDismiss}>
      <Content>
        <CircumNav>
          <CloseButton onClick={handleDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </CloseButton>
        </CircumNav>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  position: fixed;
  background-color: var(--color-gray-700-80);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 300px;
  position: absolute;
  right: 0px;

  padding: 32px;
  background-color: var(--color-white);
`;

const CircumNav = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;

  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  flex: 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

  flex: 1;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
  text-decoration: none;
`;

export default MobileMenu;
