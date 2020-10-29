import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headline = styled.h3`
  margin-bottom: 60px;
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;

  @media (min-width: 680px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: 300px 300px;
    grid-gap: 10px;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: 260px 260px;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(2, 460px);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: 260px;
  }
`;

export const Listitem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  span {
    display: block;
    transition: transform 0.3s;
  }

  &:hover {
    background-color: #fdf4f4;

    span {
      transform: rotate(-5deg) translateY(-5px);
    }
  }
`;

export const FeatureHeadline = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
`;

export const Icon = styled.span`
  padding-right: 14px;
  font-size: 30px;
`;
