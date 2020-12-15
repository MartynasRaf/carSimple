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

const CarCard = ( {navigation} ) => {
	
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detailed')} >
			<Image
				source={require('../../assets/branson-f42c-akcija-f47cn.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View>
				<AdjustLabel
					fontSize={16}
					text='Mercedes-Benz'
					style={styles.textBrand}
					numberOfLines={1}
				/>

				<AdjustLabel
					fontSize={15}
					text='1.0l SUV'
					style={styles.textInfo}
					numberOfLines={1}
				/>

				<AdjustLabel
					fontSize={15}
					text='Year: 2020'
					style={styles.textInfo}
					numberOfLines={1}
				/>

				<AdjustLabel
					fontSize={15}
					text='Diesel'
					style={styles.textInfo}
					numberOfLines={1}
				/>

				<AdjustLabel
					fontSize={16}
					text='19 500€'
					style={styles.textPrice}
					numberOfLines={1}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 150,
		width: 350,
		backgroundColor: 'rgba(0,0,0,0.35)',
		borderRadius: 12,
		marginBottom: 2,
		marginTop: 2,
		marginHorizontal: 3,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	image: {
		height: 150,
		width: 150,
		borderTopLeftRadius: 12,
		borderBottomLeftRadius: 12,
	},
	textBrand: {
		color: 'white',
		marginTop: 10,
		marginHorizontal: 10,
		height: 30,
		width: Dimensions.get('window').width / 2.5,
		fontWeight: 'bold',
	},
	textInfo: {
		color: 'white',
		marginTop: 0,
		marginHorizontal: 10,
		height: 20,
		width: Dimensions.get('window').width / 2.5,
		fontWeight: '500',
	},
	textPrice: {
		color: 'white',
		marginTop: 16,
		marginHorizontal: 10,
		height: 30,
		width: Dimensions.get('window').width / 2.5,
		fontWeight: 'bold',
	},
});

export default CarCard;
