import React from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import AdjustLabel from './AdjustLabel';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.containerStyle}>
			<TouchableOpacity style={styles.filterButtonStyle}>
				<AdjustLabel
					fontSize={16}
					text='filters'
					style={styles.filterText}
					numberOfLines={1}
				/>
			</TouchableOpacity>
			<View style={styles.backgroundStyle}>
				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					placeholder='Search by name...'
					value={term}
					onChangeText={onTermChange}
					onEndEditing={onTermSubmit}
				/>
			</View>
			<TouchableOpacity style={{ marginTop: 9 }}>
				<EvilIcons name='search' style={styles.iconStyle} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	filterButtonStyle: {
		backgroundColor: '#EE6F57',
		borderRadius: 50,
		marginVertical: 10,
		marginLeft: 10,
		alignSelf: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		height: Dimensions.get('window').height / 25,
		width:  Dimensions.get('window').width / 5.5,
		color: 'white',
	},
	filterText: {
		color: 'white',
		alignSelf: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		flex: 1,
		fontWeight: '900',
	},
	backgroundStyle: {
		flex: 1,
		height: 30,
		marginHorizontal: 5,
		marginTop: 15,
		flexDirection: 'row',
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 14,
		marginTop: 5,
		marginLeft: 10,
		height: 20,
		borderBottomWidth: 1,
		borderColor: 'grey',
	},
	iconStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 25,
		marginHorizontal: 10,
		backgroundColor: '#EE6F57',
		borderRadius: 30,
		height: Dimensions.get('window').height / 25,
		width: Dimensions.get('window').height / 25,
		color: 'white',
	},
});

export default SearchBar;
