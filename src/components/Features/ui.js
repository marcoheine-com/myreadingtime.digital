import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  text-align: center;
`;

export const Headline = styled.h3`
  margin-bottom: 60px;
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 40px;
  margin: 0;
  padding: 0;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(2, 400px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media (min-width: 1370px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

export const Listitem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Icon = styled.span`
  font-size: 40px;
`;
