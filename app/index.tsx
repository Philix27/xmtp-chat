import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Wrapper } from "./comps";
import { Ionicons } from "@expo/vector-icons";
import { AppStyles, AppUtils } from "@/utils";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <Wrapper
      title="Chats"
      rightChild={
        <Ionicons
          name={"ellipsis-vertical"}
          color={AppUtils.color.textHeadings}
          t
          size={18}
        />
      }
    >
      <View style={styles.content}>
        {conversationsData.map((val, i) => (
          <TouchableOpacity key={i} onPress={() => router.push("/chat")}>
            <View style={styles.row}>
              <View style={styles.img}>{/* Image */}</View>

              <View style={styles.textBox}>
                <View>
                  <Text style={{ ...AppStyles.h3, marginBottom: 5 }}>
                    {val.walletName}
                  </Text>
                  <Text style={AppStyles.p3}>{val.lastMsg}</Text>
                </View>
                <View>
                  <Text style={AppStyles.p3}>{val.lastMsgTime}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  content: {},
  row: {
    width: "100%",
    paddingVertical: 5,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "grey",
    marginLeft: 15,
    marginRight: 10,
  },
  textBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: AppUtils.sizes.width - 80,
    // objectFit: "fill",
    paddingVertical: 8,
    paddingRight: 10,
    borderBottomWidth: AppStyles.border.borderWidth,
    borderBottomColor: AppStyles.border.borderColor,
    // backgroundColor: "pink",
  },
});

const conversationsData: {
  walletName: string;
  img: string;
  lastMsgTime: string;
  lastMsg: string;
}[] = [
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
  {
    walletName: "0x467382",
    img: "remote ",
    lastMsgTime: "Timer pkg",
    lastMsg: "How have you been man?",
  },
];
