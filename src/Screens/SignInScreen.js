import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import AdjustLabel from '../Components/AdjustLabel';

const SignInScreen = () => {
	const [userName, setUserName] = useState('');
	const [pass, setPass] = useState('');

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<View
				style={{
					backgroundColor: '#DCEFF9',
					alignItems: 'center',
				}}
			>
				<FontAwesome
					name='user-circle'
					size={120}
					color='#EE6e57'
					style={{
						backgroundColor: 'white',
						borderRadius: 100,
						marginTop: 200,
					}}
				/>

				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.userNameInputStyle}
					placeholder='Enter User Name'
					value={userName}
					onChangeText={setUserName}
					onEndEditing={() =>
						console.log('finished editing username')
					}
				/>

				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.userNameInputStyle}
					placeholder='Enter Password'
					value={pass}
					secureTextEntry
					onChangeText={setPass}
					onEndEditing={() =>
						console.log('finished editing password')
					}
				/>

				<TouchableOpacity style={styles.signButton}>
					<AdjustLabel
						fontSize={16}
						text='Log In'
						style={styles.filterText}
						numberOfLines={1}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={{ marginTop: 10 }}>
					<Text style={{ color: 'blue' }}>
						Don't have an account? Sign up here!
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
	userNameInputStyle: {
		fontSize: 20,
		marginTop: 20,
		width: 250,
		alignItems: 'center',
		height: 40,
		borderBottomWidth: 1,
		borderColor: 'grey',
	},
	signButton: {
		backgroundColor: '#EE6F57',
		borderRadius: 50,
		marginTop: 30,
		marginLeft: 10,
		alignSelf: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		height: 40,
		width: 250,
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
});
export default SignInScreen;
