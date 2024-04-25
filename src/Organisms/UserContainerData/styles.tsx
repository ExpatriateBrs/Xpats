import styled from 'styled-components/native'
import { colors, fontsFamily, scaledSize } from '../../Styles/theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { CountriesListProps } from './types'

export const NameTitle = styled.Text`
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-right: ${widthPercentageToDP('2%')}px;
    font-family: ${fontsFamily.mono};
`

export const CellphoneTitle = styled.Text`
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-top: ${heightPercentageToDP('2%')}px;
    text-align: center;
    font-family: ${fontsFamily.mono};
`

export const CountryTitle = styled.Text`
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-top: ${heightPercentageToDP('2%')}px;
    text-align: center;
    font-family: ${fontsFamily.mono};
`



export const WhatsappArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: ${heightPercentageToDP('20%')}px;

`;

export const WhatsappButton = styled.TouchableOpacity`
    width: ${widthPercentageToDP('80%')}px;
    height: 50px;
    border-radius: 100px;
    background-color: ${colors.greenWhatsapp};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const WhatsappNumber  = styled.Text`
  font-size: 17px;
  color: ${colors.whitePrimary};
  font-weight: bold;
  margin-left: ${widthPercentageToDP('2%')}px;
  font-family: ${fontsFamily.mono};
`;


interface ButtonProps {
    disabled?: boolean
}

export const ContentContainer = styled.ScrollView`
    margin-top: ${heightPercentageToDP('5%')}px;
`
export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('1%')}px;
    margin-bottom: ${heightPercentageToDP('2%')}px;
`

export const ImageProfile = styled.Image`
    width: ${widthPercentageToDP('25%')}px;
    height: ${heightPercentageToDP('12%')}px;
    border-radius: 100px;
    margin-right: ${widthPercentageToDP('1%')}px;
`

export const EditImageButton = styled.TouchableOpacity`
    width: ${widthPercentageToDP('8.5%')}px;
    height: ${heightPercentageToDP('4%')}px;
    background-color: ${colors.bluePrimary};
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    margin-left: ${widthPercentageToDP('2%')}px;
    margin-top: ${heightPercentageToDP('-4%')}px;
`

export const SectionSeparator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${colors.grayPrimary};
    margin-top: ${heightPercentageToDP('0.5%')}px;
    margin-bottom: ${heightPercentageToDP('0.5%')}px;
`

export const DataContainer = styled.ScrollView`
    flex-direction: column;
    padding: 0 40px;
    height: ${heightPercentageToDP('100%')}px;
`

export const NameEditContainer = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
`

export const EditProfileDataButton = styled.TouchableOpacity`
    position: absolute;
    right: ${widthPercentageToDP('-45.5%')}px;
    top: ${heightPercentageToDP('-1%')}px;;
    width: ${widthPercentageToDP('11%')}px;
    height: ${heightPercentageToDP('5%')}px;
    background-color: ${colors.bluePrimary};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const TextEditProfileDataButton = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    font-family: ${fontsFamily.mono};
`


export const ServicesBadgesContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${heightPercentageToDP('3%')}px;
`
export const ServiceBadgeContainer = styled.View`
    background-color: ${colors.bluePrimary};
    width: 40%;
    margin: ${heightPercentageToDP('1%')}px;
    border-radius: 10px;

`
export const ServiceBadge = styled.Text`
    font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.blueSecondary};
    text-align: center;
    margin: ${heightPercentageToDP('1%')}px;
    font-family: ${fontsFamily.mono};
`

export const DescriptionContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('2%')}px;
    margin-bottom: ${heightPercentageToDP('2%')}px;
    padding: ${heightPercentageToDP('2%')}px ${widthPercentageToDP('2%')}px;
    border-radius: 10px;
`

export const DescripitionText = styled.Text`
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.greenPrimary};
    text-align: center;
    font-family: ${fontsFamily.mono};
    margin-top: ${heightPercentageToDP('3%')}px;
`


export const InputName = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
    font-family: ${fontsFamily.mono};
`;

export const InputCellphone = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
    font-family: ${fontsFamily.mono};
`;

export const InputCountry = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin: 10px 0;
    font-family: ${fontsFamily.mono};
`;

export const CountryContainer = styled.View`
    flex-direction: column;
    align-items: center; 
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
`;

export const CountriesList = styled.FlatList<CountriesListProps>`
    width: 80%;
    height: ${heightPercentageToDP('30%')}px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: ${heightPercentageToDP('2%')}px ${widthPercentageToDP('2%')}px;
    padding-top: 0px;
    position: absolute;
    top: 70px;
    bottom: 120px;
    margin-bottom: 70px;
    z-index: 999;
`;

export const CountriesListContainer = styled.ScrollView`
    width: 80%;
    height: ${heightPercentageToDP('32%')}px;
    max-height: ${heightPercentageToDP('32%')}px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: ${heightPercentageToDP('2%')}px ${widthPercentageToDP('2%')}px;
    padding-top: 0px;
    position: absolute;
    top: 70px;
    bottom: 120px;
    margin-bottom: 70px;
    z-index: 999;
`;

export const CountryButtonSelect = styled.TouchableOpacity`
    width: 100%;
    max-height: ${heightPercentageToDP('10%')}px;
    border-radius: 10px;
    background-color: ${colors.bluePrimary};
    padding: 10px;
    margin: 5px 0;
`;

export const CountryItem = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.blueSecondary};
    font-family: ${fontsFamily.mono};
`

export const ServicesMultiValueInput = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
    font-family: ${fontsFamily.mono};
`;

export const ServiceBadgeInput = styled.TouchableOpacity`
   font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    background-color: ${colors.bluePrimary};
    padding: ${heightPercentageToDP('1%')}px ${widthPercentageToDP('2%')}px;
    text-align: center;
    min-height: ${heightPercentageToDP('6.5%')}px;
    margin: ${heightPercentageToDP('1%')}px;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;

    align-items: center;
`;

export const ServiceBadgeInputText = styled.Text`
    font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.blueSecondary};
    text-align: center;
    margin-right: 10px;
    font-family: ${fontsFamily.mono};
`;

export const DescripitionInput = styled.TextInput`
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 20px;
    font-family: ${fontsFamily.mono};
`;


export const CheckBoxContainer = styled.View`
    width: 80%;
`;

export const LabelContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('3%')}px;
    width: ${widthPercentageToDP('72%')}px;
    text-align: center;
    position: relative;
`;
export const LabelAloneContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('3%')}px;
    width: ${widthPercentageToDP('70%')}px;
    text-align: center;
    position: relative;
`;

export const LabelText = styled.Text`
    position: absolute;
    right: ${widthPercentageToDP('45%')}px;
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin: 5px;
    padding: 5px;
    margin-bottom: 0;
    font-family: ${fontsFamily.mono};

`;
export const ValueText = styled.Text`
    position: absolute;
    left: ${widthPercentageToDP('27%')}px;
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.greenPrimary};
    font-family: ${fontsFamily.mono};

`;


export const ButtonSaveContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonSave = styled.TouchableOpacity<ButtonProps>`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ disabled }: ButtonProps) => disabled ? colors.graySecondary : colors.bluePrimary};
    padding: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CancelButton = styled.TouchableOpacity<ButtonProps>`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ disabled }: ButtonProps) => disabled ? colors.graySecondary : colors.yellowPrimary};
    padding: 10px;
    margin-top: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const SaveText = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.yellowPrimary};
    margin-right: 10px;
    font-family: ${fontsFamily.mono};
`;

export const CancelText = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.bluePrimary};
    margin-right: 10px;
    font-family: ${fontsFamily.mono};
`;

export const ExitButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ExitButton = styled.TouchableOpacity`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.yellowPrimary};
    padding: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ExitText = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.bluePrimary};
    margin-right: 10px;
    font-family: ${fontsFamily.mono};
`;
