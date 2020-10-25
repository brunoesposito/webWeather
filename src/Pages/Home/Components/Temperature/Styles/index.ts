import styled from 'styled-components';

export const BoxTemp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const BoxBrand = styled.div`
  width: 70px;
  height: 70px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const BoxTempCity = styled.div``;

export const City = styled.span`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 15px;
  text-align: center;
  display: block;
`;

export const Description = styled.span`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 15px;
  display: block;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const BoxMinMax = styled.div``;

export const BoxMinMaxText = styled.span`
  color: ${(props) => props.theme.styled.colors.white};
  margin: 0 5px 0 0;
  text-align: center;
  display: block;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const BoxMainTemp = styled.div`
  margin: 30px 0;
  text-align: center;
`;

export const Temp = styled.span`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 75px;
`;
