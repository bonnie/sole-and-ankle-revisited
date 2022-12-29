import styled from "styled-components";

const NavLink = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${(props) => props.theme.weights.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default NavLink;
