import styled from 'styled-components/native';

interface IconImageProps {
  focused: boolean;
}

export const Container = styled.View<IconImageProps>`
    width: 40px;
    height: 40px;

    background: ${({theme, focused }) => focused ? theme.colors.secondary_light : theme.colors.secondary};

    border-radius: 35px;

    align-items: center;
    justify-content: center;

`;
