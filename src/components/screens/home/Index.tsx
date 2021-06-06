import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

import { Ionicons } from "@expo/vector-icons";
// import CachedImage from 'react-native-expo-cached-image';
import { MotiView, AnimatePresence } from "moti";

import { styles } from "./styles";
import { popularBooksData, newestBooksData } from "./data";
import { BookCard } from "../../../components/cards/BookCard";
import { hp, wp } from "../../../utils";
// import userPic from "../../../assets/my-profile-6d2276c9.jpg";

type Props = {
  bookData: any;
  navigateDetails: (book: any) => void;
};

export const HomeView = ({ bookData, navigateDetails }: Props) => {
  const { data, isError, isLoading, error } = bookData;
  const popularBooks = data.slice(0, 5);

  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "timing",
          duration: 3000,
          // set a custom transition for scale
          scale: {
            type: "spring",
            delay: 500,
          },
        }}
      >
        <View style={[globalStyles.rowBetween, globalStyles.header]}>
          <View style={styles.userInfo}>
            <Image
              source={require("../../../assets/my-profile-6d2276c9.jpg")}
              style={styles.profileImag}
              resizeMode="contain"
            />
            <Text style={styles.username}>Hi, Ademola!</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="search" size={20} />
          </TouchableOpacity>
        </View>
      </MotiView>
      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.popularTitle}>Popular Books</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {popularBooks.map((book: any) => (
                <MotiView
                  key={book.ISBN}
                  from={{ translateX: 50, scale: 0, opacity: 0 }}
                  animate={{ translateX: 0, scale: 1, opacity: 1 }}
                  transition={{
                    type: "timing",
                    duration: 3000,
                    // set a custom transition for scale
                    translateY: {
                      delay: 500,
                    },
                    opacity: {
                      delay: 500,
                    },
                    scale: {
                      type: "spring",
                      delay: 500,
                    },
                  }}
                >
                  <View style={styles.popularCard}>
                    <Image
                      source={{ uri: book.image }}
                      style={styles.popularbookImg}
                      resizeMode="cover"
                    />
                    <Text style={styles.bookTitle}>{book.title}</Text>
                    <Text style={styles.bookAuthor}>{book.author}</Text>
                  </View>
                </MotiView>
              ))}
            </ScrollView>
            <Text style={styles.newestTitle}>Newest</Text>
          </View>
        }
        data={data}
        keyExtractor={(item) => `${item.ISBN}`}
        renderItem={({ item }) => (
          <BookCard book={item} navigateDetails={() => navigateDetails(item)} />
        )}
        contentContainerStyle={globalStyles.container}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
