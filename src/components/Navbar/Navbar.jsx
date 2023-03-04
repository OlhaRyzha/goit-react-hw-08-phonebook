import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar } from './Navbar.styled';
import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavBar>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Outlet />
    </NavBar>
  );
};
export default Navbar;
