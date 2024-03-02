/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef } from "react";
import {
  AppState,
  StyleSheet,
  useColorScheme,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/app/store";
import AppRoutes from "./src/routes";
import { ThemeProvider } from "@react-navigation/native";
import theme from "./src/Styles/theme";
import { NativeBaseProvider } from "native-base";
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';
import * as SplashScreen from 'expo-splash-screen'

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  SplashScreen.preventAutoHideAsync()

  setTimeout(()=> {
    SplashScreen.hideAsync()
  },2000)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const appState = useRef(AppState.currentState);


  mobileAds()
    .setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,

      tagForChildDirectedTreatment: true,

      tagForUnderAgeOfConsent: true,

      testDeviceIdentifiers: ['EMULATOR'],
    })
    .then(() => {
    });

   
  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log('adapterStatuses // Initialization complete!', adapterStatuses)
    // Initialization complete!
  });

  return (
    <SafeAreaProvider>
      
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NativeBaseProvider>
            <AppRoutes />
          </NativeBaseProvider>

        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
