import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 50px 0;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 15px;
  background-color: pink;
  border-radius: 5px;
  box-shadow: 0 0 10px black;
  margin: 40px 0;
`;
