import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import {
  REMOVE_DETAIL_ITEM_ID,
  CHANGE_SHOW_DETAIL,
} from "../redux/ItemActions";

import { useSelector, useDispatch } from "react-redux";

export default function OneItem() {
  const [item, setItem] = useState({ id: -1 });
  const showDetailId = useSelector((state2) => state2.showDetailId);
  const dispatch = useDispatch();

  useEffect(() => {
    getItemDetail();
  }, []);

  const getItemDetail = () =>
    fetch(`http://192.168.1.101/items_list/item_detail.php/?id=${showDetailId}`)
      .then((response) => response.json())
      .then((responseJson) => setItem(responseJson))
      .catch((error) => Alert.alert("Network error"));

  if (item.id == -1 || showDetailId == -1) {
    return (
      <View style={styles.container}>
        <Text>Item not found</Text>
      </View>
    );
  }

  const handleClose = () => {
    dispatch({ type: REMOVE_DETAIL_ITEM_ID });
    dispatch({ type: CHANGE_SHOW_DETAIL });
  };

  return (
    <View style={styles.container}>
      <View key={item.id} style={styles.oneItemContainer}>
        <Text style={styles.itemTitle}>{`Title:\n${item.title}`}</Text>
        <Text
          style={styles.itemDescription}
        >{`Description:\n${item.description}`}</Text>
      </View>
      <View style={styles.containerButton}>
        <Button onPress={handleClose} title="close"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  oneItemContainer: { margin: 5, width: "70%" },
  itemTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: "black",
  },
  itemDescription: { fontStyle: "italic", textAlign: "center", fontSize: 25 },
  containerButton: { width: 100, height: 35 },
});
