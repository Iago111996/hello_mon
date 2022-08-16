import styled from "styled-components/native";

interface IconImageProps {
  focused: boolean;
}

export const Container = styled.View<IconImageProps>`
  width: 60px;
  height: 60px;

  background: ${({ theme, focused }) =>
    focused ? theme.colors.secondary_light : theme.colors.secondary};

  margin-bottom: 28px;

  border-radius: 35px;

  align-items: center;
  justify-content: center;
`;

export const IconImage = styled.Image`
  width: 32px;
  height: 32px;
`;
