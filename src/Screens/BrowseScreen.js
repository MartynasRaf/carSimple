import React, { useState } from 'react';
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

const BrowseScreen = () => {
	const [term, setTerm] = useState('');

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<View
				style={{
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
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
});

export default BrowseScreen;
