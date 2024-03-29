import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { colors, fontsFamily } from "../../Styles/theme";
import { InputProps } from "./types";

export const InputGenericContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const InputGeneric = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.bluePrimary};
    color: ${({ isFocused }: InputProps) => isFocused ? colors.yellowPrimary : colors.whitePrimary};
    padding: 10px;
    margin-top: ${({ marginTop }: InputProps) => heightPercentageToDP(marginTop || 0)}px;
    font-family: ${fontsFamily.mono};

`;


export const IconDiv = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: absolute;
    right: ${widthPercentageToDP('12%')}px;
    top: ${heightPercentageToDP('5.2%')}px;
    align-self: center;
    margin-top: 2%;
`;

