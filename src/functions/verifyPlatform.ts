import { Platform } from "react-native"

interface TypeAdsProps {
  type: 'banner' | 'intestitial'
}

const adUnitId = {
  banner: () => {
    if (Platform.OS === 'ios') {
      return 'ca-app-pub-2814259275801960/6226623651'
    } else if (Platform.OS === 'android') {
      return 'ca-app-pub-2814259275801960/2749223707'
    }

    return 'ca-app-pub-2814259275801960/2749223707'
  },

  intestitial: () => {
    if (Platform.OS === 'ios') {
      return 'ca-app-pub-2814259275801960/4878910635'
    } else if (Platform.OS === 'android') {
      return 'ca-app-pub-2814259275801960/2252747291'
    }

    return 'ca-app-pub-2814259275801960/2252747291'
  }
}

export const verifyPlatform = ({ type }: TypeAdsProps) => {

  return adUnitId[type]();
}