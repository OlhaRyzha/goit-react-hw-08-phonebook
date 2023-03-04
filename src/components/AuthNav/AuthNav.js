import { StyledNavLink, StyledNavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavList>
        <li>
          <StyledNavLink to="login">Login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="register">Register</StyledNavLink>
        </li>
      </StyledNavList>
    </div>
  );
};
