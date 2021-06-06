import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";

import { Home } from "../screens";
import { MainTabParamList } from "./types";

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      detachInactiveScreens={true}
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <MainTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="home"
              color={focused ? "lightblue" : "#000"}
              size={20}
            />
          ),
        })}
      />
      <MainTab.Screen
        name="Favourite"
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <Fontisto
              name="bookmark"
              color={focused ? "lightblue" : "#000"}
              size={20}
            />
          ),
        })}
      >
        {(props) => <Comp {...props} name="Favourite" />}
      </MainTab.Screen>
      <MainTab.Screen
        name="Cart"
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="shoppingcart"
              color={focused ? "lightblue" : "#000"}
              size={20}
            />
          ),
        })}
      >
        {(props) => <Comp {...props} name="Cart" />}
      </MainTab.Screen>
      <MainTab.Screen
        name="Settings"
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="setting"
              color={focused ? "lightblue" : "#000"}
              size={20}
            />
          ),
        })}
      >
        {(props) => <Comp {...props} name="Settings" />}
      </MainTab.Screen>
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

type Props = {
  name: string;
};

const Comp = ({ name }: Props) => {
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};
