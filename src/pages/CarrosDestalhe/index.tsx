import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICarrosVenda } from '../../interfaces/ICarrosVenda';
import {
  Content,
  ImagemCarro,
  ContainerImagem,
  ContainerInformacoes,
  NomeCarro,
  PrecoCarro,
  DescricaoCarro,
} from './styles';

const CarrosDetalhe: React.FC = () => {
  const { params } = useRoute();
  const routeParams = params as ICarrosVenda;

  return (
    <ScrollView>
      <Content>
        <ContainerInformacoes>
          <NomeCarro>{routeParams.nome}</NomeCarro>
          <PrecoCarro>{routeParams.preco}</PrecoCarro>
          <DescricaoCarro>{routeParams.descricao}</DescricaoCarro>
        </ContainerInformacoes>
        {routeParams.imagens.map((image: string) => {
          return (
            <ContainerImagem key={image}>
              <ImagemCarro source={{ uri: image }} />
            </ContainerImagem>
          );
        })}
      </Content>
    </ScrollView>
  );
};

export default CarrosDetalhe;
