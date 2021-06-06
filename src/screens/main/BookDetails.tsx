import React from "react";
import { View, Text } from "react-native";

import { BookDetailsView } from "../../components";
import { BookDetailsProps } from "../../navigations/types";

export const BookDetails = ({ navigation, route }: BookDetailsProps) => {
  const book = route.params.book;

  return <BookDetailsView goBack={() => navigation.goBack()} book={book} />;
};
