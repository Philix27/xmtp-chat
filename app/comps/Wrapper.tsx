import React, { ReactNode } from "react";
import {
  StyleSheet,
  ViewStyle,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Text, View } from "@/comps";
import { AppStyles, AppUtils } from "@/utils";

type IProps = {
  children: ReactNode;
  style?: ViewStyle;
  title: string;
  rightChild?: ReactNode;
  hideTop?: boolean;
};

export function Wrapper(props: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, height: AppUtils.sizes.height }}>
        <View style={styles.viewContainer}>
          {props.hideTop || (
            <View style={styles.topBar}>
              <Text style={AppStyles.h1}>{props.title}</Text>
              {props.rightChild}
            </View>
          )}

          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.children}>{props.children}</View>
          </ScrollView>
        </View>
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
  children: {
    position: "relative",
    height: "100%",
  },
  viewContainer: {
    flex: 1,
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: AppStyles.border.borderWidth,
    borderBottomColor: AppStyles.border.borderColor,
  },
});
