import styled from 'styled-components';

export const Button = styled.button`
  background-color: white;
  border: ${({ disabled }) =>
    disabled ? '1px solid lightgray' : '2px solid black'};
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 10px;
  font-weight: ${({ disabled }) => (disabled ? 'normal' : 'bold')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'none' : 'black')};
    color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
  }
`;
