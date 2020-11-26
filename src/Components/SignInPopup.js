import React, { useEffect, useRef } from 'react';
import {
	View,
	StyleSheet,
	Animated,
	Dimensions,
	TextInput,
} from 'react-native';

const SignInPopup = () => {
	let position = new Animated.ValueXY({ x: 0, y: -2000 });

	useEffect(() => {
		Animated.spring(position, {
			toValue: { x: 0, y: 100 },
			useNativeDriver: false,
		}).start();
	}, []);

	return (
		<Animated.View style={position.getLayout()}>
			<View style={styles.ball}>
				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					placeholder='Search by name...'
				/>
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	ball: {
		height: 300,
		width: Dimensions.get('window').width - 10,
		backgroundColor: '#EE6e57',
		zIndex: 2,
		position: 'absolute',
		alignSelf: 'center',
	},
});

export default SignInPopup;
