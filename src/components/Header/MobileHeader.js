import React from "react";
import styled from "styled-components/macro";

import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import Logo from "../Logo";

const MobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const handleClick = () => setShowMobileMenu(true);
  const handleDismiss = () => () => setShowMobileMenu(false);

  return (
    <Wrapper>
      <Logo />
      <Actions>
        <ShoppingBagButton>
          <VisuallyHidden>Open shopping cart</VisuallyHidden>
          <Icon id="shopping-bag"></Icon>
        </ShoppingBagButton>
        <UnstyledButton>
          <VisuallyHidden>Search</VisuallyHidden>
          <Icon id="search"></Icon>
        </UnstyledButton>
        <UnstyledButton onClick={handleClick}>
          <VisuallyHidden>Open menu</VisuallyHidden>
          <Icon id="menu"></Icon>
        </UnstyledButton>
      </Actions>
      <MobileMenu isOpen={showMobileMenu} onDismiss={handleDismiss} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: flex;
    align-content: center;
    align-items: space-between;

    padding: 18px 32px;

    border-top: 4px solid ${(props) => props.theme.colors.gray[900]};
    border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};
  }

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Actions = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    gap: 24px;
  }
`;

export default MobileHeader;
