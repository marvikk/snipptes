import React, { Component } from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
//Dimensions reads the dimentions of your device

const SLIDE_DATA = [
	{ text: "Welcome to the App", color: "#03A9F4" },
	{ text: "Use this to get what you need", color: "#009688" },
	{ text: "Set your location, then swipe away", color: "#03A9F4" }
];

class Slides extends Component {
	renderSlides() {
		return SLIDE_DATA.map((slide, index) => {
			return (
				<View
					key={slide.text}
					style={[styles.slideStyle, { backgroundColor: slide.color }]}
					//styles can be passed as an array of objects
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView
				horizontal
				/*without horizontal the pages are mushed together on top of each other on one page*/

				pagingEnabled
				/*without pagingEnabled you scroll through all pages with one swipe without stopping at each individual page*/
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: SCREEN_WIDTH
	},
	textStyle: {
		fontSize: 30,
		color: "white"
	}
};

export default Slides;
