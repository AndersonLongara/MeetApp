import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;
  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 300px;
      height: 150px;
      background: #261f2d;
    }
    input {
      display: none;
    }
  }
`;
