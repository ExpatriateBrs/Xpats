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