import styled from 'styled-components/native'
import { colors } from '../../Styles/theme'
import { heightPercentageToDP } from 'react-native-responsive-screen'


export const HomeContainer = styled.View`
    flex: 1;
    background-color: ${colors.whitePrimary};

`
export const FeedContainer = styled.View`
`
export const GalleryContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const BannerContainer = styled.View`
    margin-top: ${heightPercentageToDP('5%')}px;

`