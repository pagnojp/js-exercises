import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import api from '../services/api';
import DetailsScreen from './details';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "JShunt",
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFFFFF"
  };
  state = {
    docs: [],
    productsInfo: {},
    page: 1
  };
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productsInfo } = response.data;
    this.setState({ 
      docs: [...this.state.docs, ...docs],
      productsInfo,
      page
    });
  };

  loadMore = () => {
    const { page, productsInfo } = this.state;

    if (page === productsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);

  }

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity 
        style={styles.itemButton}
        onPress={ () => this.props.navigation.navigate('Details', { item: item })}
        >
        <Text style={styles.itemButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.sectionContainer}>
        <FlatList
          data={this.state.docs}
          keyExtractor={ item => item._id }
          renderItem={this.renderItem}
          contentContainerStyle={styles.list}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Main extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#FAFAFA",
    flex: 1
  },
  list: {
    padding: 20
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333333"
  },
  itemDescription: {
    fontSize: 16,
    color: "#999999",
    marginTop: 5,
    lineHeight: 24
  },
  itemButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  itemButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "700"
  }
})