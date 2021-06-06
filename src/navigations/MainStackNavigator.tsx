import React from "react";
import { View, Text, Platform } from "react-native";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { BookDetails, Home } from "../screens";
import { BookDetailsView } from "../components";
import { MainStackParamList } from "./types";
import MainTabNavigator from "./MainTabNavigator";

const StackNavigator = createSharedElementStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={() => ({
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      })}
      // mode={Platform.OS === "ios" ? "modal" : "card"}
    >
      <StackNavigator.Screen
        name="HomeTab"
        component={MainTabNavigator}
        options={() => ({})}
      />
      <StackNavigator.Screen
        name="BookDetails"
        component={BookDetails}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 1000 } },
            close: { animation: "timing", config: { duration: 1000 } },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { book } = route.params;
          return [
            {
              id: `book.${book.ISBN}.image`,
              animation: "move",
              resize: "clip",
              align: "center-center",
            },
            {
              id: `book.${book.ISBN}.author`,
              animation: "move",
              resize: "clip",
              align: "center-center",
            },
            {
              id: `book.${book.ISBN}.title`,
              animation: "move",
              resize: "clip",
              align: "center-center",
            },
          ];
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default MainStackNavigator;
