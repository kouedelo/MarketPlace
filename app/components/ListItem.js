import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  IconComponent,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title} </AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle} </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: { marginLeft: 10, justifyContent: "center", flex: 1 },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontWeight: "500" },
  subTitle: { color: colors.medium },
});
