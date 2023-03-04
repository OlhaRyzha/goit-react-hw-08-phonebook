import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: all 0.5s linear;
  transform: scale(0.9);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
  }
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: #d8d0d0;
    padding: 10px 18px;
    border-radius: 8px;
    transform: scale(1);
    pointer-events: none;
  }
`;
