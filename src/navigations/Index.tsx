import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";

import MainStackNavigator from "./MainStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useAuthProvider } from "../hooks/useAuthProvider";
enableScreens();

export const NavigatorContainerComponent = () => {
  const { auth } = useAuthProvider();

  console.log(auth);

  return (
    <NavigationContainer>
      {auth.user === null ? <AuthStackNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};
