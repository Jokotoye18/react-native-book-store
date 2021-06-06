import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";
// import CachedImage from "react-native-expo-cached-image";
import { Rating, AirbnbRating } from "react-native-ratings";
import { SharedElement } from "react-navigation-shared-element";

import { globalStyles } from "../../styles/globalStyles";
import { hp, wp } from "../../utils";

type Book = {
  book: any;
  navigateDetails: () => void;
};

export const BookCardWithoutMemo = ({ book, navigateDetails }: Book) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={navigateDetails}
      style={[globalStyles.rowStart, styles.book]}
    >
      <>
        <SharedElement id={`book.${book.ISBN}.image`}>
          <Image
            source={{ uri: book.image }}
            style={styles.img}
            resizeMode="stretch"
          />
        </SharedElement>
        <View style={{ flex: 1, paddingHorizontal: wp(15) }}>
          <SharedElement id={`book.${book.ISBN}.title`}>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </SharedElement>
          <SharedElement id={`book.${book.ISBN}.author`}>
            <Text style={styles.bookAuthor}>{book.author}</Text>
          </SharedElement>
          <View style={{ marginTop: hp(20) }}>
            <Rating
              ratingCount={5}
              imageSize={13}
              // showRating
              // onFinishRating={this.ratingCompleted}
              style={{
                alignItems: "flex-start",
              }}
            />
          </View>
        </View>
        <View style={styles.icon}>
          <Fontisto name="bookmark" size={20} style={{}} />
        </View>
      </>
    </TouchableHighlight>
  );
};

export const BookCard = React.memo(BookCardWithoutMemo);

const styles = StyleSheet.create({
  book: {
    marginBottom: hp(10),
    padding: hp(10),
    borderRadius: hp(10),
  },
  img: {
    width: wp(60),
    height: hp(100),
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: hp(16),
    paddingBottom: hp(6),
    paddingTop: hp(5),
  },
  bookAuthor: {
    fontWeight: "400",
    fontSize: hp(13),
    color: "gray",
  },
  icon: {
    paddingTop: hp(5),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
