import styled from 'styled-components/native';
import { colors, fontsFamily } from '../../Styles/theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.bluePrimary};
`

export const WelcomeContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const WelcomeText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${colors.blueSecondary};
    font-family: ${fontsFamily.mono};
`;

export const HeaderContainer = styled.View`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${heightPercentageToDP('3%')}px;
`;

export const LogoImage = styled.Image`
    width: ${widthPercentageToDP('80%')}px;
    height: ${heightPercentageToDP('55%')}px; 
`;

export const InputContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;


