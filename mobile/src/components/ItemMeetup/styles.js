import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 20px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

export const Image = styled.Image.attrs({
  resizemode: 'cover',
})`
  width: 100%;
  height: 150px;
`;

export const Title = styled.Text`
  padding: 10px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const Date = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #ccc;
`;

export const Location = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #ccc;
`;

export const Organizer = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #ccc;
  margin-bottom: 10px;
`;
