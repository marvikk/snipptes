import React, { Component } from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";

export default class App extends React.Component {
	render() {
		const MainNavigator = TabNavigator({
			Home: {
				screen: HomeScreen
			},
			Content: {
				screen: ContentScreen
			}
		});
		return <MainNavigator />;
	}
}

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
		</View>
	);
};

const ContentScreen = () => {
	return (
		<View style={styles.container}>
			<Text>ContentScreen</Text>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
};
