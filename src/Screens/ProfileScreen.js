import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import CarCard from '../Components/CarCard';
import HorizontalScroll from '../Components/HorizontalScroll';
import Ball from '../Components/Ball';
import SignInPopup from '../Components/SignInPopup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<View
				style={{
					backgroundColor: '#DCEFF9',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('SignIn')}>
					<FontAwesome
						name='user-circle'
						size={60}
						color='#EE6e57'
						style={{ backgroundColor: 'white', borderRadius: 100 }}
					/>
					<Text style={{ fontSize: 26 }}>Sign In</Text>
				</TouchableOpacity>

				<HorizontalScroll	
					categoryText='Favorites'
					style={styles.scrollStyle}
					navigation = {navigation}
				/>

				<HorizontalScroll
					categoryText='Uploaded'
					style={[styles.scrollStyle, { marginTop: 0 }]}
					navigation = {navigation}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6e57',
	},
	profileButton: { alignItems: 'center', marginTop: 20 },
	headers: {
		// all these properties change nothing
		//alignSelf: 'stretch',
		//marginLeft: 10,
		//fontSize: 10,
	},
	scrollStyle: { height: 200, marginTop: 10 },
});
export default ProfileScreen;
