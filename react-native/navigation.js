import React, { Component } from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native-elements";

import Slides from "./components/Slides";

export default class App extends React.Component {
	render() {
		const MainNavigator = TabNavigator({
			Home: {
				screen: Slides
			},
			Content: {
				screen: ContentScreen
			}, {
      navigationOptions: {
				//hides tabs
        tabBar: { visible: false }
      },
			//prevents loading all the components in the nav structure to avoid triggering execution of componentDidMount() and such
      lazyLoad: true
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

const ContentScreen = props => {
	return (
		<View style={styles.container}>
			<Button
				onPress={() => props.navigation.navigate("Home")}
				//the navigation object is being passed by default to props
				title="Navigate back!"
				raised
				//rased gives a bit of a box shadow.
				icon={{
					name: "squirrel",
					type: "octicon"
					//icon needs both name and type to locate it
				}}
				buttonStyle={styles.buttonStyle}
			/>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	buttonStyle: {
		backgroundColor: "#0288D1"
	}
};
