import { hp, wp } from "../../../utils";
import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(15),
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: wp(15),
    paddingBottom: hp(20),
  },

  img: {
    width: wp(200),
    height: hp(300),
  },
  title: {
    fontSize: hp(30),
    fontWeight: "bold",
  },
  author: {
    fontSize: hp(16),
    fontWeight: "400",
    color: "gray",
  },
  info: {
    fontSize: hp(14),
    fontWeight: "400",
    color: "gray",
    paddingVertical: hp(20),
    lineHeight: 28,
  },
  actionBtn: {
    backgroundColor: "#fff",
    flexBasis: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(5),
    paddingVertical: hp(5),
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  actionText: {
    fontWeight: "600",
    fontSize: hp(15),
  },
  btnBox: {
    position: "absolute",
    left: wp(15),
    bottom: hp(30),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#000",
    width: "100%",
    borderRadius: hp(10),
    paddingVertical: hp(20),
    marginVertical: hp(30),
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp(17),
  },
});
