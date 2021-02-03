import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

import itemReducer from "./src/redux/ItemReducer";
import MainScreen from "./src/components/MainScreen";

const store = createStore(itemReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
        }}
      >
        <MainScreen />
      </SafeAreaView>
    </Provider>
  );
}
