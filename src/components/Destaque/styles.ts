import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid gray;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #312e38;
`;

export const ImagemDestaque = styled.Image`
  flex: 1;
  height: 260px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-radius: 5px;
`;

export const TextoDestaque = styled.Text`
  text-align: center;
  margin: 5px 0;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: lightgray;
`;
