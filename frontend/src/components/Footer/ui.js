import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  list-style-type: none;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;

  @media (min-width: 640px) {
    margin-bottom: 0;
    :not(:first-child) {
      margin-left: 20px;
    }
  }
`;
