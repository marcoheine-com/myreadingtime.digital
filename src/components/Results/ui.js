import styled from 'styled-components';

export const Results = styled.section`
  max-width: 600px;
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;
