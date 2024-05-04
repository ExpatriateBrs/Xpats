import styled from 'styled-components/native'
import { colors, fontsFamily, scaledSize } from '../../Styles/theme'
import { CheckBoxStructureProps } from './types'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


export const SearchContainer = styled.View`
    flex: 1;
    background-color: ${colors.whitePrimary};

`

export const FeedContainer = styled.View`
`
export const GalleryContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const InputContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: ${heightPercentageToDP('7%')}px;
    margin-left: ${widthPercentageToDP('5%')}px;
    margin-right: ${widthPercentageToDP('5%')}px;

    
`
export const InputCheckBoxContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${heightPercentageToDP('7%')}px;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.whitePrimary};
    border-radius: 10px;
    flex-direction: row;
    position: relative;
    margin-top: ${heightPercentageToDP('-1%')}px;
    padding: 0 10px;
`

export const InputCheckBox = styled.View<CheckBoxStructureProps>`
    width: 7%;
    height: 45%;
    justify-content: center;
    align-items: center;
    background-color: ${({ isSelected }: CheckBoxStructureProps) => isSelected ? colors.bluePrimary : colors.whitePrimary};
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid ${colors.bluePrimary};

`

export const InputCheckBoxLabel = styled.Text`
    font-size: ${scaledSize(14)}px;
    color: #000;
    font-weight: 400;
    font-family: ${fontsFamily.mono};
`

export const BannerContainer = styled.View`
    width: 100%;
    background-color: red;
    border-radius: 10px;
    margin: ${heightPercentageToDP('0.5%')}px 0;
    padding: 0 10px;
    min-height: ${heightPercentageToDP('5%')}px;
`

export const DropdownInputCategory = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.whitePrimary};
    border-radius: 10px;
    flex-direction: row;
    position: relative;
    margin: ${heightPercentageToDP('2%')}px 0;
    padding: 0 10px;
    flex-direction: column;
    
`

export const DropdownInputCategoryLabel = styled.Text`
    font-size: ${scaledSize(14)}px;
    color: ${colors.bluePrimary};
    font-weight: 400;
    font-family: ${fontsFamily.mono};
    margin-top: ${heightPercentageToDP('1%')}px;

`
export const CleanDropdownButton = styled.TouchableOpacity`
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('1%')}px;

    padding-bottom: ${heightPercentageToDP('1%')}px;
    background-color: ${colors.yellowPrimary};
    border-radius: 10px;
`