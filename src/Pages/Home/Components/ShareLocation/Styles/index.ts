import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.styled.colors.white};
`;

export const BoxImage = styled.div`
  width: 250px;
  height: 250px;
  margin: 30px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.styled.colors.white};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.styled.colors.success};
  color: ${(props) => props.theme.styled.colors.white};
  border: 0;
  border-radius: 4px;
  padding: 6px 10px;
  margin-top: 20px;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.styled.colors.primary};
    border-color: ${(props) => props.theme.styled.colors.success};
  }
`;
