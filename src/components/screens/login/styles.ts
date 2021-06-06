import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: wp(15),
  },
  back: {
    marginTop: hp(20),
  },
  header: {
    flex: 1,
    marginTop: hp(30),
  },
  title1: {
    fontSize: hp(30),
    fontWeight: "800",
  },
  title2: {
    fontSize: hp(26),
    fontWeight: "400",
    paddingTop: hp(10),
  },
  forms: {
    flex: 6,
  },
  inputContainer: {
    marginBottom: hp(30),
  },
  input: {
    borderRadius: hp(10),
    height: hp(50),
    backgroundColor: "rgba(173,216,230, 0.2)",
    paddingHorizontal: wp(20),
    borderWidth: 0.6,
    borderColor: "#ccc",
  },
  error: {
    paddingTop: hp(5),
    fontSize: hp(13),
    color: "tomato",
  },
  acoountMessage: {
    textAlign: "center",
    paddingRight: wp(10),
  },
  biometric: {
    fontSize: hp(16),
    textAlign: "right",
    fontWeight: "600",
    paddingBottom: hp(20),
    textDecorationLine: "underline",
  },

  footer: {
    width: "100%",
  },
  btn: {
    backgroundColor: "#000",
    width: "100%",
    borderRadius: hp(10),
    paddingVertical: hp(20),
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp(17),
    textTransform: "uppercase",
    fontWeight: "700",
    paddingRight: wp(10),
  },
});
