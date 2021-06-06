import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import { SharedElement } from "react-navigation-shared-element";
import { MotiView } from "moti";

import { styles } from "./styles";
import { globalStyles } from "../../../styles/globalStyles";
import { hp, wp } from "../../../utils";

type Props = {
  book: any;
  goBack: () => void;
};

export const BookDetailsView = ({ book, goBack }: Props) => {
  const { author, id, rate, title, image, summary, price } = book;
  console.log(image);

  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <View style={[globalStyles.rowBetween, globalStyles.header]}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="md-chevron-back-outline" size={30} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Fontisto
              name="bookmark"
              size={20}
              style={{ marginRight: wp(30) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="more-v-a" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={[globalStyles.rowCenter, { marginVertical: hp(15) }]}>
          <SharedElement id={`book.${book.ISBN}.image`}>
            <Image
              source={{ uri: image }}
              style={styles.img}
              resizeMode="stretch"
            />
          </SharedElement>
        </View>
        <View style={{ alignItems: "center" }}>
          <SharedElement id={`book.${book.ISBN}.title`}>
            <Text style={styles.title}>{title}</Text>
          </SharedElement>
          <SharedElement id={`book.${book.ISBN}.author`}>
            <Text style={styles.author}>{author}</Text>
          </SharedElement>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "timing",
              duration: 2000,
            }}
          >
            <Rating
              ratingCount={5}
              imageSize={15}
              // showRating
              // onFinishRating={this.ratingCompleted}
              style={{
                alignItems: "flex-start",
                marginTop: hp(20),
              }}
            />
          </MotiView>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "timing",
              duration: 2000,
            }}
          >
            <Text style={styles.info}>{summary}</Text>
          </MotiView>
        </View>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 2000,
          }}
        >
          <View style={globalStyles.rowBetween}>
            <TouchableOpacity style={[styles.actionBtn]}>
              <MaterialIcons
                name="preview"
                size={20}
                style={{ marginRight: wp(10) }}
              />
              <Text style={styles.actionText}>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={18}
                style={{ marginRight: wp(10) }}
              />
              <Text style={styles.actionText}>Reviews</Text>
            </TouchableOpacity>
          </View>
        </MotiView>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 2000,
          }}
        >
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnText}>{`Buy now for $${price.value}`}</Text>
          </TouchableOpacity>
        </MotiView>
      </ScrollView>
    </SafeAreaView>
  );
};
