import styled from 'styled-components';

export const ListItem = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h4,
  p {
    margin: 0;
  }
`;
