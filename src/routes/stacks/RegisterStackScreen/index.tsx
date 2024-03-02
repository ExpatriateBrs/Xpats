import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../..";
import { LoginScreen } from "../../../pages/LoginScreen";
import { RegisterScreen } from "../../../pages/ResgisterScreen";
import { WelcomeScreen } from "../../../pages/WelcomeScreen";

const RegisterStack = createNativeStackNavigator<RootStackParamList>()

export const RegisterStackScreen = () => {
    return <RegisterStack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'fade' }}
    >
        <RegisterStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <RegisterStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RegisterStack.Screen name="LoginScreen" component={LoginScreen} />

    </RegisterStack.Navigator>
}