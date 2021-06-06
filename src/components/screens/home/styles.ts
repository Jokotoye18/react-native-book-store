import React from "react";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils";

export const styles = StyleSheet.create({
  popularCard: {
    marginRight: wp(20),
    width: wp(120),
  },
  profileImag: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(7),
    marginRight: wp(10),
  },
  popularTitle: {
    fontSize: hp(25),
    fontWeight: "bold",
    marginBottom: hp(20),
    paddingTop: hp(10),
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: hp(16),
    fontWeight: "700",
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: hp(16),
    paddingBottom: hp(6),
    paddingTop: hp(15),
  },
  bookAuthor: {
    fontWeight: "400",
    fontSize: hp(13),
    color: "gray",
  },
  popularbookImg: {
    // width: wp(60),
    width: wp(120),
    height: hp(200),
    borderRadius: hp(4),
  },
  newestTitle: {
    fontSize: hp(30),
    fontWeight: "bold",
    paddingVertical: hp(15),
  },
});
