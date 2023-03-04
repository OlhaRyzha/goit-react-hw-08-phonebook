import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from 'hooks/useAuth';
import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import {
  Container,
  UserMenuButton,
  UserMenuName,
  UserMenuText,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Container>
        <ul>
          <li>
            <StyledNavLink to="contacts">Contacts</StyledNavLink>
          </li>
        </ul>
        <UserMenuButton type="button" onClick={handleLogout}>
          Logout
        </UserMenuButton>
      </Container>
      <UserMenuText>
        Welcome, <UserMenuName>{user.name}</UserMenuName>{' '}
      </UserMenuText>
    </>
  );
};
