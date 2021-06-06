import React from "react";
import { View, ActivityIndicator } from "react-native";

export const LoadingIndicator = () => (
  <View style={[]}>
    <ActivityIndicator size="small" animating color={"#fff"} />
  </View>
);
