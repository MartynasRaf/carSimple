import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import AdjustLabel from '../Components/AdjustLabel';

const DetaileCarScreen = () => {
	return (
			<View>
				<View style={styles.canvas}/>
				<Image
					source={require('../../assets/branson-f42c-akcija-f47cn.jpg')}
					resizeMode='cover'
					style={styles.image}
				/>
				<View style={{zIndex: 3}}>
					<AdjustLabel
						fontSize={25}
						text='Mercedes-Benz'
						style={styles.textHeader}
						numberOfLines={1}
					/>

					<AdjustLabel
						fontSize={15}
						text='1.0l SUV'
						style={styles.textSimple}
						numberOfLines={1}
					/>

					<AdjustLabel
						fontSize={15}
						text='Year: 2020'
						style={styles.textSimple}
						numberOfLines={1}
					/>

					<AdjustLabel
						fontSize={15}
						text='Diesel'
						style={styles.textSimple}
						numberOfLines={1}
					/>

					<AdjustLabel
						fontSize={25}
						text='19 500€'
						style={styles.textPrice}
						//numberOfLines={1}
					/>
				</View>
			</View>
	);
};

const styles = StyleSheet.create({
	canvas: {
		position: 'absolute',
		marginTop: Dimensions.get('window').height / 3 - 25,
		borderRadius: 30,
		zIndex: 2,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor: '#DCEFF9'
	},
	image: {
		resizeMode: 'cover',
		zIndex: 1,
		height: Dimensions.get('window').height / 3,
		width: Dimensions.get('window').width,
	},
	textHeader: {
		//position: 'absolute',
		color: 'black',
		marginHorizontal: 10,
		marginBottom: 20,
		width: Dimensions.get('window').width,
		fontWeight: 'bold',
	},
	textSimple: {
		color: 'black',
		marginTop: 0,
		marginHorizontal: 10,
		height: 20,
		width: Dimensions.get('window').width / 2.5,
		fontWeight: '500',
	},
	textPrice: {
		position: 'absolute',
		textAlign: 'right',
		color: 'grey',
		//marginTop: 10,
		width: Dimensions.get('window').width - 20,
		fontWeight: 'bold',
	},
});

export default DetaileCarScreen;
