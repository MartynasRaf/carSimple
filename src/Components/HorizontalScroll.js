import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import CarCard from '../Components/CarCard';

const HorizontalScroll = (props) => {
	return (
		<View style={props.style}>
			<Text style={styles.headers}>{props.categoryText}</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle
				style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
			>
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	headers: {
		alignSelf: 'center',
		marginLeft: 0,
		fontSize: 20,
	},
});

export default HorizontalScroll;
