/* eslint-disable react/button-has-type */
import React from 'react';

import LocationImg from './images/location.png';
import {Content, Title, BoxImage, Image, Text, Button} from './Styles';

const ShareLocation: React.FC = () => {
  return (
    <Content>
      <Title>LOCALIZAÇÃO</Title>
      <BoxImage>
        <Image src={LocationImg} alt="Compartilhe sua localização" />
      </BoxImage>
      <Text>
        Por favor compartilhe sua localização para o site funcionar normalmente
      </Text>
      <Button onClick={() => window.location.reload()}>
        Recarregar a página
      </Button>
    </Content>
  );
};

export default ShareLocation;
