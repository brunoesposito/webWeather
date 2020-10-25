import React from 'react';

import {
  BoxTemp,
  BoxBrand,
  Image,
  BoxTempCity,
  City,
  Description,
  Temp,
  BoxMinMax,
  BoxMinMaxText,
  BoxMainTemp,
} from './Styles';

import Brand from './images/weather.svg';
import {toFixedNumber} from '../../Functions';
import {TypeWeatherComponent} from '../../Ts';

const Temperature: React.FC<TypeWeatherComponent> = ({weather}) => {
  return (
    <>
      <BoxTemp>
        <BoxMinMax>
          <BoxMinMaxText>
            Máx.: {toFixedNumber(weather.list[0].main.temp_max)}°
          </BoxMinMaxText>
          <BoxMinMaxText>
            Min.: {toFixedNumber(weather.list[0].main.temp_min)}°
          </BoxMinMaxText>
        </BoxMinMax>
        <BoxBrand>
          <Image src={Brand} alt="Web Weather" />
        </BoxBrand>
        <BoxTempCity>
          <City>
            <b>{weather.city.name}</b>{' '}
            <Description>
              ({weather.list[0].weather[0].description})
            </Description>
          </City>
        </BoxTempCity>
      </BoxTemp>
      <BoxMainTemp>
        <Temp>{toFixedNumber(weather.list[0].main.temp)}°</Temp>
      </BoxMainTemp>
    </>
  );
};

export default Temperature;
