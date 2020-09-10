import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  border-bottom: 2px solid white;
  transition: all 0.2s;
  &:not(:last-of-type) {
    margin-right: 10px;

    @media (min-width: 420px) {
      margin-right: 20px;
    }
  }

  &:hover {
    border-bottom: 2px solid black;
  }
  a {
    padding: 10px;
    display: block;
    text-decoration: none;

    @media (min-width: 500px) {
      padding: 10px 20px;
    }
  }
`;
