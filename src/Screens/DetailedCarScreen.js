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
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

const DetaileCarScreen = ( {navigation} ) => {
	return (
			<View>
				<TouchableOpacity style={styles.favoriteButton}>
					<FontAwesome
						name='heart'
						size={60}
						color='#EE6e57'
					/>
				</TouchableOpacity>
				<View style={styles.canvas}/>
					<TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
						<FontAwesome
							name='times'
							size={30}
							color='black'
						/>
					</TouchableOpacity>
					<Image
						source={require('../../assets/branson-f42c-akcija-f47cn.jpg')}
						resizeMode='cover'
						style={styles.image}
					/>
				<View style={{zIndex: 3}}>
					<AdjustLabel
						fontSize={15}
						text='1998'
						style={styles.textSimple}
						numberOfLines={1}
					/>
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
		marginHorizontal: 10,
		//height: 20,
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
	favoriteButton: {
		position: 'absolute',
		marginTop: 200,
		marginLeft: Dimensions.get('window').width - 80,
		zIndex: 5
	},
	cancelButton: {
		position: 'absolute',
		zIndex:4,
		marginLeft: 20,
		marginTop: 40,
		opacity: 0.6
	}
});

export default DetaileCarScreen;
