import React, { useEffect } from "react";
import {
  Text,

  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useScreen } from "../stores/screen";
import { colors, fontsFamily } from "../Styles/theme";
import { useCounterClickAd } from "../stores/CounterClickAd";
import { AdEventType, InterstitialAd } from "react-native-google-mobile-ads";
import { Platform } from "react-native";
import { verifyPlatform } from "../functions/verifyPlatform";

interface MyTabBarProps {
  initialScreen: number;
  navigation: any;
}

const interstitialAd = InterstitialAd.createForAdRequest(verifyPlatform({ type: 'intestitial' }), {
  keywords: ['fashion', 'clothing', 'food', 'drink', 'cooking'],
});

export function MyTabBar({ navigation, initialScreen = 0 }: MyTabBarProps) {
  const { screen = initialScreen, setScreen } = useScreen((state) => state);

  const { setClicks, clicks } = useCounterClickAd(state => state)
  const [interstitialAds, setInterstitialAds] = React.useState<any>(null)
  const initInterstitialAd = () => {
    console.log('interstitialAd pre evento', interstitialAd)
    interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      setInterstitialAds(interstitialAd)
    }
    )
    interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
    }
    )
    interstitialAd.load()
  }

  const showInterstitialAd = async () => {
    console.log('interstitialAds', interstitialAds)
    if (interstitialAds) {
      interstitialAds.show()
    }
  }

  useEffect(() => {
    initInterstitialAd()

  }, [clicks]);


  const selectScreen = (page: number, screen: string) => {
    setScreen(page)
    console.log('clicks', clicks)
    if (clicks >= 2) {
      showInterstitialAd()
      setClicks(0)
    } else {

      setClicks(clicks + 1)
    }
    navigation.navigate(screen)
  }

  return (
    <>
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={screen == 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            selectScreen(0, 'HomeScreen');
          }}
        >
          <Center>
            <MaterialIcons name='home' size={24} color={screen == 0 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 0 ? colors.greenPrimary : colors.bluePrimary} fontSize="12" style={{fontFamily: fontsFamily.mono}}>
              Início
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={screen == 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            selectScreen(1, 'Search');
          }}
        >
          <Center>
            <MaterialIcons name='search' size={24} color={screen == 1 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 1 ? colors.greenPrimary : colors.bluePrimary} fontSize="12" style={{fontFamily: fontsFamily.mono}}>
              Procurar
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={screen == 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            selectScreen(2, 'Profile');
          }}
        >
          <Center>
            <AntDesign name="user" size={24} color={screen == 2 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 2 ? colors.greenPrimary : colors.bluePrimary} fontSize="12" style={{fontFamily: fontsFamily.mono}}>
              Perfil
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </>
  );
}
