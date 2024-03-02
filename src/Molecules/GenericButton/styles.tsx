import { widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { colors, fontsFamily } from "../../Styles/theme";

interface ButtonProps {
    backgroundColor?: string;
    border?: string;
}

interface TextButtonProps {
    color?: string;
}


export const ButtonGenericContainer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const ButtonGeneric = styled.TouchableOpacity<ButtonProps>`
    width: ${widthPercentageToDP('80%')}px;
    height: 50px;
    border-radius: 100px;
    border: ${({ border }: ButtonProps) => !!border ? `${border}` : 'none'};
    background-color: ${({ backgroundColor }: ButtonProps) => backgroundColor || colors.bluePrimary};
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const GenericText = styled.Text<TextButtonProps>`
    font-size: 20px;
    font-weight: bold;
    color: ${({ color }: TextButtonProps) => color || colors.yellowPrimary};
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${fontsFamily.mono};
`;
