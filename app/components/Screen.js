import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return Platform.OS === "ios" ? (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  ) : Platform.OS === "android" ? (
    <View style={[styles.screen, style]}>{children}</View>
  ) : (
    ""
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
