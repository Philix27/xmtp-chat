import { StyleSheet, Text, View, Pressable } from "react-native";
import { Wrapper } from "./comps";
import { AppStyles } from "@/utils";
import { AppTextInput } from "@/comps";
import { Ionicons } from "@expo/vector-icons";

export default function IndexPage() {
  return (
    <Wrapper
      title="Chats"
      rightChild={<Ionicons name={"ellipsis-vertical"} size={18} />}
    >
      <View style={styles.content}>
        <AppTextInput label="Mobile number" numeric />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
});
