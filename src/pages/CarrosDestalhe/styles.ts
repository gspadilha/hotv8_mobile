import styled from 'styled-components/native';
import { darken } from 'polished';
import FastImage from 'react-native-fast-image';

export const Content = styled.View`
  flex: 1;
  margin-top: 5px;
`;

export const ContainerInformacoes = styled.View`
  border: 1px solid lightgray;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #312e38;
`;

export const NomeCarro = styled.Text`
  color: lightgray;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin-bottom: 5px;
  padding: 5px 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${darken('0.11', '#312e38')};
`;

export const PrecoCarro = styled.Text`
  color: lightgray;
  text-align: center;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 5px;
`;

export const DescricaoCarro = styled.Text`
  color: lightgray;
  text-align: center;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 5px;
  line-height: 20px;
  font-size: 12px;
`;

export const ContainerImagem = styled.View`
  border: 1px solid gray;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #312e38;
`;

export const ImagemCarro = styled(FastImage)`
  flex: 1;
  min-height: 255px;
  height: auto;
  border-radius: 5px;
`;
