import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme}) => theme.colors.shape};
`;

export const Img = styled.Image`
  width: 100%;
  height: 400px;
`;

export const ImgAvatar = styled.Image`
  width: 135px;
  height: 135px;

  border-radius: 100px;
`;

export const MainScroll = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

export const WrapperImage = styled.View`
  width: 135px;
  height: 135px;

  margin-top: 250px;
  margin-left: 32px;

  border-radius: 100px;

  position: relative;
`;

export const ButtonEdit = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.text};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 8px;
  right: 6px;
`;

export const WrapperForm = styled.View`
  padding: 0 16px;
`;

export const WrapperButton = styled.View`
  margin-top: 32px;
`;

export const WrapperIconButton = styled.View`
  position: absolute;

  margin-left: 16px;
  margin-top: 32px;

  z-index: 1;
`;
