import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import ItemsList from "./ItemsList";
import OneItem from "./OneItem";

export default function MainScreen() {
  const showDetail = useSelector((state) => state.showDetail);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        {showDetail ? <OneItem /> : <ItemsList />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SafeAreaViewStyle: {
    flex: 1,
  },
});
