import styled from 'styled-components';
import { darken } from 'polished';

export const Loading = styled.strong`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    font-family: 'Roboto';
    font-size: 32px;
    color: rgba(255, 255, 255, 0.9);
    flex: 1;
    align-self: center;
  }
  div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

export const ButtonEdit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 172px;
  height: 42px;
  align-self: flex-end;
  width: 142px;
  margin: 0;
  height: 42px;
  background: #4dbaf9;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.04, '#4DBAF9')};
  }

  p {
    padding-left: 5px;
  }
`;

export const ButtonCanc = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 172px;
  height: 42px;
  align-self: flex-end;
  width: 142px;
  margin: 0 0 0 15px;
  height: 42px;
  background: #d44059;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.04, '#D44059')};
  }

  p {
    padding-left: 5px;
  }
`;

export const ImageMeetup = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
  p {
    font-family: 'Roboto';
    font-family: 18px;
    color: #fff;
    margin-top: 30px;
    line-height: 2;
  }
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  time {
    font-family: 'Roboto';
    font-size: 16px;
    margin-left: 10px;
    margin-right: 40px;
    color: rgba(255, 255, 255, 0.6);
  }
  p {
    padding-left: 5px;
    font-family: 'Roboto';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
