import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UploadScreen = () => {
	return <SafeAreaView style={styles.mainScreenStyle}></SafeAreaView>;
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
});
export default UploadScreen;
