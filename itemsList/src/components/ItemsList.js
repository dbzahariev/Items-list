import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import Timeline from "react-native-timeline-flatlist";
import moment from "moment";

import { SET_DETAIL_ITEM_ID, CHANGE_SHOW_DETAIL } from "../redux/ItemActions";

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getItemsFromServer();
  }, []);

  const getItemsFromServer = () => {
    // TODO: Change IP for this pc
    return fetch("http://192.168.1.101/items_list/items_list.php")
      .then((response) => response.json())
      .then((responseJson) =>
        setItems(
          responseJson.map((element) => ({
            ...element,
            time: moment(element.time, "HH:mm:ss").format("HH:mm"),
            description: null,
          }))
        )
      )
      .catch((error) => {
        Alert.alert("Network error", "Network error. Check your network.");
        return console.error(error);
      });
  };

  const handleEventPress = (element) => {
    dispatch({ type: SET_DETAIL_ITEM_ID, data: element.id });
    dispatch({ type: CHANGE_SHOW_DETAIL });
  };

  return (
    <View style={styles.container}>
      {items.length > 0 ? (
        <Timeline
          data={items}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeStyle={styles.timeStyle}
          titleStyle={styles.titleStyle}
          onEventPress={handleEventPress}
        />
      ) : (
        <Text>No Items</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  timeStyle: {
    width: 70,
    textAlign: "center",
  },
  titleStyle: {
    paddingTop: 0,
    marginTop: -10,
  },
});
