import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigatorContainerComponent } from "./src/navigations/Index";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./src/contexts/auth-context";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" translucent={false} backgroundColor="#fff" />
        <NavigatorContainerComponent />
      </QueryClientProvider>
    </>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
