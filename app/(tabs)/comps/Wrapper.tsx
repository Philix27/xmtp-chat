import React, { ReactNode } from "react";
import {
  StyleSheet,
  ViewStyle,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AppButton, Text, TextComponent, View } from "@/comps";
import { AppStyles, AppUtils } from "@/utils";
import { Ionicons } from "@expo/vector-icons";

type IProps = {
  children: ReactNode;
  style?: ViewStyle;
  title: string;
  rightChild?: ReactNode;
};

export function Wrapper(props: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text style={AppStyles.h1}>{props.title}</Text>
          {props.rightChild}
        </View>
        <View>{props.children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppUtils.color.bg,
    paddingTop: StatusBar.currentHeight,
  },
  viewContainer: {
    flex: 1,
    // padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoImage: {
    height: 120,
    width: 120,
  },
  footerContainer: {
    marginTop: "auto",
  },
});
