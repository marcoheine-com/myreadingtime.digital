import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-top: 20px;
  margin-bottom: 60px;

  @media (min-width: 610px) {
    flex-direction: row;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 610px) {
    display: flex;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  border-bottom: 2px solid white;
  transition: all 0.2s;
  text-align: center;
  &:not(:last-of-type) {
    margin-right: 10px;

    @media (min-width: 610px) {
      margin-right: 20px;
      text-align: left;
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

export const Count = styled.span`
  background-color: black;
  color: white;
  display: inline-block;
  padding: 2px 7px;
  border-radius: 13px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  padding: 10px 20px;
`;
