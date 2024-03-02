import React from "react";
import { Container, HeaderContainer, InputContainer, LogoImage, WelcomeContainer, WelcomeText } from "./styles";
import { colors } from "../../Styles/theme";
import { StatusBar } from "react-native";
import { GenericButton } from "../../Molecules/GenericButton";

export const WelcomeStructure = ({ navigation }: any) => {
    StatusBar.setHidden(true);

    return (
        <Container>
            <HeaderContainer>
                <LogoImage source={require('../../../assets/LogoNoSlogan.png')} resizeMode="contain" />
            </HeaderContainer>
            <WelcomeContainer>
                <WelcomeText styles={{fontFamily: 'OpenSansRegular'}}>
                    Bem vindo!
                </WelcomeText>
            </WelcomeContainer>
            <InputContainer>
                <GenericButton backgroundColor={colors.yellowPrimary} color={colors.bluePrimary} content="Registrar conta" onPress={() => navigation.navigate('RegisterScreen')} />
                <GenericButton color={colors.blueSecondary} border={`2px solid ${colors.blueSecondary}`} content="Entrar" onPress={() => navigation.navigate('LoginScreen')} />
            </InputContainer>



        </Container>
    )
}