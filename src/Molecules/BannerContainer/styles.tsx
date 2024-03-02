import styled from 'styled-components/native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export const BannerContainer = styled.View`
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    margin: ${heightPercentageToDP('0.5%')}px 0;
    padding: 0 10px;
`