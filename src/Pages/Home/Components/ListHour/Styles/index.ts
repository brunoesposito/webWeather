import styled from 'styled-components';

export const ListDays = styled.div`
  border: 1px solid ${(props) => props.theme.styled.colors.white};
  border-radius: 4px;
  padding: 20px 20px 10px;
`;

export const Box = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.styled.colors.white};
`;

export const BoxMaxMin = styled.div``;

export const Hr = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.styled.colors.white};
  margin-bottom: 20px;
`;
