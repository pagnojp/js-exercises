import React from "react";
import { View, Text } from "react-native";

const DetailsScreen = ({ navigation }) => (
  <View>
    <Text>{navigation.state.params.item.description}</Text>
  </View>
);

DetailsScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.title,
  headerStyle: {
    backgroundColor: "#DA552F"
  },
  headerTintColor: "#FFFFFF"
});

export default DetailsScreen;
