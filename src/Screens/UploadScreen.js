import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PickerModal from 'react-native-picker-modal-view';

const UploadScreen = () => {
	let selectedItem = { Name: ' Select Brand' };

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<ScrollView>
				<PickerModal
					renderSelectView={(disabled, selected, showModal) => (
						<Button
							disabled={disabled}
							title={
								typeof selectedItem.Name === 'string'
									? selectedItem.Name
									: 'Select Brand'
							}
							onPress={showModal}
						/>
					)}
					onSelected={(it) => (selectedItem = it)}
					onClosed={console.log('just testin')}
					onBackButtonPressed={console.log('just testin')}
					items={[
						{
							Name: 'Audi',
							Value: 'Åland Islands',
							Code: 'AX',
							Id: 1,
						},
						{
							Name: 'BMW',
							Value: 'Albania',
							Code: 'AL',
							Id: 2,
						},
						{
							Name: 'Volvo',
							Value: 'Algeria',
							Code: 'DZ',
							Id: 3,
						},
						{
							Name: 'Lada',
							Value: 'American Samoa',
							Code: 'AS',
							Id: 4,
						},
					]}
					sortingLanguage={'tr'}
					showToTopButton={true}
					selected={selectedItem}
					showAlphabeticalIndex={true}
					autoGenerateAlphabeticalIndex={true}
					selectPlaceholderText={'Choose one...'}
					onEndReached={() => console.log('list ended...')}
					searchPlaceholderText={'Search...'}
					requireSelection={false}
					autoSort={false}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
});
export default UploadScreen;

/*
					onSelected={this.onSelected.bind(this)}
					onClosed={this.onClosed.bind(this)}
					onBackButtonPressed={this.onBackButtonPressed.bind(this)}
*/
