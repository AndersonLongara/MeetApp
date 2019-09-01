import styled from 'styled-components';

export const StyledLoader = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 2px solid;
  border-color: #eee #eee transparent;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;
