import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Input } from '@rocketseat/unform';

export const Loading = styled.strong`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
`;

export const Inputml = styled(Input)`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  padding: 5px 15px;
  color: #fff;
  margin: 0 0 10px;
  &::placeholder {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  padding: 0 30px;
  form {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    > button {
      margin: 5px 0 0;
      height: 44px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${lighten(0.05, '#d44059')};
      }
      &:disabled {
        opacity: 0.7;
        cursor: wait;
      }
      & + button {
        &:hover {
          background: ${darken(0.1, '#d44059')};
        }
      }
    }
    span {
      color: ${lighten(0.1, '#f64c75')};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 11px;
    }
  }
`;
