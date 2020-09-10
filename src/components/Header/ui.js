import styled from 'styled-components';

export const Header = styled.header`
  background-image: url(${(props) => props.headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  position: relative;
  width: 100%;
`;

export const Logo = styled.h1`
  a {
    color: white;
    text-decoration: none;
  }
  margin-bottom: 60px;
  position: absolute;
  left: 20px;
  top: 0;
`;

export const Credits = styled.p`
  position: absolute;
  color: white;
  right: 20px;
  bottom: 4px;
  a {
    color: white;
  }
  font-size: 8px;
  opacity: 0.3;
`;
