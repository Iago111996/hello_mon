import styled from 'styled-components/native';

interface IconImageProps {
    size: number;
}

export const Container = styled.View`
    width: 60px;
    height: 60px;

    background: ${({theme }) => theme.colors.secondary_light};

    margin-bottom: 24px;

    border-radius: 35px;

    align-items: center;
    justify-content: center;

`;

export const IconImage = styled.Image<IconImageProps>`
    width: 32px;
    height: 32px;
`;