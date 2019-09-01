import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    strong {
      color: #fff;
      font-size: 32px;
      font-family: 'Roboto';
      opacity: 0.9;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 172px;
  height: 42px;
  align-self: flex-end;
  width: 163px;
  margin: 5px 0 0;
  height: 42px;
  background: #d44059;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.04, '#d44059')};
  }
  p {
    padding-left: 5px;
  }
`;

export const ListMeetups = styled.li`
  list-style: none;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  padding: 20px 50px;
`;

export const Loading = styled.strong`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
`;

export const NameMeetup = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  opacity: 0.9;
  p {
    margin: 0 8px;
  }
`;

export const DateMeetup = styled.div`
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  span {
    color: #fff;
    margin: 0 5px;
  }
`;

export const Wrapper = styled.div`
  button {
    border: none;
    background: transparent;
    color: #eee;
    font-size: 16px;
  }
  strong {
    font-size: 16px;
    font-family: 'Roboto';
    color: #fff;
  }

  span {
    color: #aaa;
    font-size: 14px;
    margin: 0;
  }
`;
