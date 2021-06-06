import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { HomeView } from "../../components";
import { useBooks } from "../../hooks";
import { HomeProps } from "../../navigations/types";

export const Home = ({ navigation }: HomeProps) => {
  const navigateDetails = (book: any) => {
    navigation.navigate("BookDetails", {
      book: book,
    });
  };

  const { data, isError, isLoading, error } = useBooks();

  const bookData = { data, isError, isLoading, error };

  if (isError) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Error occured</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator animating size="large" color="#000" />
      </View>
    );
  }

  return <HomeView navigateDetails={navigateDetails} bookData={bookData} />;
};
