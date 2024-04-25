import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { SectionProps } from "./types";
import { colors, fontsFamily } from "../../Styles/theme";

export const DescriptionText = styled.Text`
  color: ${colors.whitePrimary};
  font-family: ${fontsFamily.mono};
`;

export const Section = styled.View<SectionProps>`
  position: relative;
  height: ${({ heightPercentage }: SectionProps) =>
    heightPercentageToDP(heightPercentage || "10%")}px;
`;
export const ServicesContainer = styled.View``;

export const Heading = styled.Text`
  font-size: 18px;
  font-weight: 800;
  line-height: 35px;
  color: ${colors.whitePrimary};
  font-family: ${fontsFamily.mono};
`;

export const AspectRadioView = styled.View`
  aspect-ratio: 1.2;
  width: ${widthPercentageToDP('45%')}px;
`

export const CardContainer = styled.TouchableOpacity`
  margin: 5px;
  border-radius: 10px;
  background-color: ${colors.greenPrimary};
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;

  
`

export const CategoryText = styled.Text`
  color: ${colors.bluePrimary};
  font-family: ${fontsFamily.mono};
  font-size: 12px;
  margin-top: 5px;
`

export const CategoryContainer = styled.View`
  background-color: ${colors.greenSecondary};
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 5px; */
`

export const CenterCustom = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; 
  position: absolute;
  background-color: ${colors.yellowPrimary};
  bottom: 15%;
  width: 100%;
  z-index: 10;
  padding: 0 10%;

`

export const CenterText = styled.Text`
  color: ${colors.blackPrimary};
  font-family: ${fontsFamily.mono};
  font-size: 14px;
`