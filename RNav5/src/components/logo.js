import React from 'react';
import styled from 'styled-components/native';

const ContainerButton = styled.TouchableOpacity`
    width:120px;
    height:35px;
    align-items:center;
    justify-content:center;
    background-color:blue;
    margin-right:20px;
    border-radius:10px;
`;

const TextButton = styled.Text`
    font-size: 26px;
    text-align: center;
    color:white;
`;
const  ImgButton = styled.Image`
    width:120px;
    height:35px;
    border-radius:10px;
`;

export default () => {
    return (
        <ContainerButton>
            <ImgButton source={{uri:'https://www.google.com.br/google.jpg'}}/>
        </ContainerButton>
    )
};