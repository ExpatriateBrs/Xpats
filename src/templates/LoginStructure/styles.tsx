import styled from 'styled-components/native';
import { colors, fontsFamily, scaledSize } from '../../Styles/theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { InputLoginProps } from './types';

export const TitleContainer = styled.View`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${heightPercentageToDP('10%')}px;
`;

export const TitlePage = styled.Text`
    font-size: ${scaledSize(24)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-top: ${heightPercentageToDP('5%')}px;
    font-family: ${fontsFamily.mono};
`;

export const InputContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InputLogin = styled.TextInput<InputLoginProps>`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.bluePrimary};
    color: ${colors.yellowPrimary};
    padding: 10px;
    margin-top: ${({ marginTop }: InputLoginProps) => heightPercentageToDP(marginTop || 0)}px;
    font-family: ${fontsFamily.mono};
`;


export const ButtonLoginContainer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: ${widthPercentageToDP('80%')}px;
    height: 50px;
    border-radius: 100px;
    background-color: ${colors.greenPrimary};
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const LoginText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.yellowPrimary};
    justify-content: center;
    align-items: center;
    font-family: ${fontsFamily.mono};
`;

export const RegisterLinkContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const RegisterLink = styled.TouchableOpacity`
    width: ${widthPercentageToDP('80%')}px;
    height: 50px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const RegisterText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.greenPrimary};
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-family: ${fontsFamily.mono};
`;

export const LoginButtonContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;


