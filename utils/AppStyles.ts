import { StyleSheet } from "react-native";
import { AppUtils } from "./StylesUtils";

export const AppStyles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 40,
  },
  title: {
    marginTop: 15,
    paddingVertical: 15,
  },
  h1: {
    fontSize: 20,
    fontWeight: "800",
    color: AppUtils.color.textHeadings,
  },
  h2: {
    fontSize: 17,
    fontWeight: "700",
    color: AppUtils.color.textHeadings,
  },
  h3: {
    fontSize: 15,
    fontWeight: "600",
    color: AppUtils.color.textHeadings,
  },
  p1: {
    fontSize: 17,
    fontWeight: "500",
    color: AppUtils.color.textBody,
    letterSpacing: 1.2,
  },
  p2: {
    fontSize: 15,
    fontWeight: "300",
    color: AppUtils.color.textBody,
  },
  p3: {
    fontSize: 13,
    fontWeight: "300",
    color: AppUtils.color.textBody,
  },
  inputText: {
    color: AppUtils.color.grey,
    fontSize: 16,
    fontWeight: 400,
  },
  border: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: AppUtils.color.grey,
  },
  inputBorder: {
    borderWidth: 0.5,
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderStyle: "solid",
  },
  cardShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textLink: {
    color: AppUtils.color.primary,
    fontWeight: 500,
    marginHorizontal: 5,
    fontSize: 14,
  },
});
