import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppStyles, AppUtils } from "@/utils";
import { AppTextInput } from "@/comps";
import { Wrapper } from "../comps";

export default function HomeScreen() {
  return (
    <Wrapper
      title="msg with 0x12"
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
          <View style={styles.row} key={i}>
            {val.isMe && <View />}
            <View
              style={{
                ...styles.bubble,
                backgroundColor: val.isMe
                  ? AppUtils.color.card
                  : AppUtils.color.secondary,
                borderBottomRightRadius: val.isMe ? 0 : 20,
                borderBottomLeftRadius: !val.isMe ? 0 : 20,
              }}
            >
              <Text
                style={{
                  ...AppStyles.p2,
                  color: AppUtils.color.textHeadings,
                  marginBottom: 5,
                }}
              >
                {val.msg}
              </Text>
            </View>
            {val.isMe || <View />}
          </View>
        ))}
      </View>

      <View style={inputStyles.container}>
        <View style={inputStyles.content}>
          <AppTextInput placeholder="Type your message" />
          <Ionicons name="send-outline" size={20} />
        </View>
      </View>
    </Wrapper>
  );
}

const inputStyles = StyleSheet.create({
  container: {
    width: AppUtils.sizes.width,
    // backgroundColor: "orange",
    backgroundColor: AppUtils.color.card,
    // height: 40,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopWidth: AppStyles.border.borderWidth,
    borderBottomColor: AppStyles.border.borderColor,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bubble: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
});

const conversationsData: {
  isMe: boolean;
  time: string;
  msg: string;
}[] = [
  {
    isMe: true,
    time: "5:00pm",
    msg: "Hey man",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "I have been good.",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "I have been good.",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "I have been good.",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "Wassup Bro",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How have you been?",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "I have been good.",
  },
  {
    isMe: false,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
  {
    isMe: true,
    time: "5:00pm",
    msg: "How about you?",
  },
];
