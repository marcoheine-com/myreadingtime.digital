import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 20px;
  &:(not)::last-of-type {
    margin-right: 20px;
  }
  
  a {
    display: block;
    text-decoration: none;
  }
`;
