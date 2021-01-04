import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICarrosVenda } from '../../interfaces/ICarrosVenda';
import Destaque from '../../components/Destaque';

import { Content } from './styles';

const CarrosDashboard: React.FC = () => {
  const [carrosVenda, setCarrosVenda] = useState([]);

  const buscarCarrosAVenda = async () => {
    const response = await api.get('/carros-venda');
    setCarrosVenda(response.data);
  };

  useEffect(() => {
    buscarCarrosAVenda();
  }, []);

  return (
    <ScrollView>
      <Content>
        {carrosVenda.map((carro: ICarrosVenda) => {
          return <Destaque key={carro.index} carro={carro} />;
        })}
      </Content>
    </ScrollView>
  );
};

export default CarrosDashboard;
