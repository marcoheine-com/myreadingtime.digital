import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 600px;
  min-height: 70vh;
  padding: 0 20px;
`;

export const NoData = styled.section`
  text-align: center;
`;

export const Headline = styled.h1`
  text-align: center;
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
`;
