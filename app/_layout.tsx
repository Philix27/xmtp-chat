import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AppUtils } from "@/utils";
import { Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="index"
          options={{
            title: "Chat",
            headerShown: false,
            headerLargeTitle: false,
            headerLargeTitleShadowVisible: false,
            contentStyle: {
              backgroundColor: AppUtils.color.bg,
            },
            headerBackButtonMenuEnabled: true,
            statusBarColor: AppUtils.color.bg,
            headerStyle: {
              backgroundColor: AppUtils.color.bg,
            },
            headerTitleStyle: {
              color: AppUtils.color.textBody,
            },
            autoHideHomeIndicator: true,
            // headerLargeTitleStyle: {
            //   fontSize: 10,
            //   fontWeight: "200",
            // },
          }}
        />
        <Stack.Screen
          name="chat/index"
          options={{
            title: "Message",
            headerShown: false,
            headerLargeTitle: false,
            headerLargeTitleShadowVisible: false,
            contentStyle: {
              backgroundColor: AppUtils.color.bg,
            },
            headerBackButtonMenuEnabled: true,
            statusBarColor: AppUtils.color.bg,
            headerStyle: {
              backgroundColor: AppUtils.color.bg,
            },
            headerTitleStyle: {
              color: AppUtils.color.textBody,
            },
            autoHideHomeIndicator: true,
            // headerLargeTitleStyle: {
            //   fontSize: 10,
            //   fontWeight: "200",
            // },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
