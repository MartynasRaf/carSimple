import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	FlatList,
	ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarCard from '../Components/CarCard';
import SearchBar from '../Components/SearchBar';
import useCarApi from '../hooks/useCarApi';
import axios from 'axios';

const BrowseScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const [firstLoad] = useCarApi('api/users/Martynas', [], 100);

	console.log(firstLoad);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				styles: styles.mainScreenStyle,
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: '#DCEFF9',
				}}
			>
				<View style={{ backgroundColor: 'transperant' }}>
					<SearchBar
						term={term}
						onTermChange={setTerm}
						onTermSubmit={() => console.log(term)}
					/>
				</View>
				<ScrollView>
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
					<CarCard navigation={navigation} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
});

export default BrowseScreen;
