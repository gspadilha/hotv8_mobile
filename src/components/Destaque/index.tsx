import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICarrosVenda } from '../../interfaces/ICarrosVenda';

import { Container, ImagemDestaque, TextoDestaque } from './styles';

interface ICarrosAVenda {
  carro: ICarrosVenda;
}

const Destaque: React.FC<ICarrosAVenda> = ({ carro }: ICarrosAVenda) => {
  const { navigate } = useNavigation();

  const irParaDetalhe = (c: ICarrosVenda) => {
    navigate('Detalhamento', c);
  };

  return (
    <Container>
      <RectButton onPress={() => irParaDetalhe(carro)}>
        <ImagemDestaque source={{ uri: carro.imagemDestaque }} />
        <TextoDestaque>{carro.nome}</TextoDestaque>
      </RectButton>
    </Container>
  );
};

export default Destaque;
