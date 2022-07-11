import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  position: relative;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const MainScroll = styled.ScrollView`
  width: 270px;
  height: 300px;

  background: ${({ theme }) => theme.colors.shape};

  margin-top: 70px;
  margin-left: 16px;

  padding: 16px;

  border-radius: 8px;
  border: .5px solid ${({ theme }) => theme.colors.gray_line};

  position: absolute;
`;

export const Title = styled.Text``;