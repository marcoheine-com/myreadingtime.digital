import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  display: grid;
  grid-template-rows: minmax(300px, 1fr);
  justify-items: center;
  padding: 0 20px;
  margin-bottom: 100px;
`;

export const Headline = styled.h2`
  margin-bottom: 20px;
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Loading = styled.p`
  font-size: 20px;
  margin-bottom: 100px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  -webkit-appearance: none;
`;

export const Searchbar = styled.input`
  background: white;
  border-radius: 3px;
  border: 0;
  box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
  color: gray;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  max-width: 600px;
  padding: 10px 20px;
  transition: all 0.4s ease;
  width: 70%;
  &:focus {
    box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
    color: black;
    outline: none;
  }
`;

export const Slot = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;
