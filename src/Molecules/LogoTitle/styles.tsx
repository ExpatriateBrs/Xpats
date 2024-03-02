import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const LogoImage = styled.Image`
    width: ${widthPercentageToDP('80%')}px;
    height: ${heightPercentageToDP('15%')}px; 
`;