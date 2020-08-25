import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  display: grid;
  grid-template-rows: minmax(300px, 1fr);
  justify-items: center;
  padding: 0 20px;
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
