import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PickerModal from 'react-native-picker-modal-view';

const UploadScreen = () => {
	let selectedBrand = { Name: 'Select Brand' };
	let selectedModel = { Name: 'Select Model' };

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<ScrollView>
				<PickerModal
					renderSelectView={(disabled, selected, showModal) => (
						<Button
							disabled={disabled}
							title={
								typeof selectedBrand.Name === 'string'
									? selectedBrand.Name
									: 'Select Brand'
							}
							onPress={showModal}
						/>
					)}
					onSelected={(it) => (selectedBrand = it)}
					onClosed={console.log('just testin')}
					onBackButtonPressed={console.log('just testin')}
					items={[
						{
							Name: 'Audi',
							//Value: 'Åland Islands',
							//Code: 'AX',
							//Id: 1,
						},
						{
							Name: 'BMW',
						},
						{
							Name: 'Volvo',
						},
						{
							Name: 'Lada',
						},
					]}
					sortingLanguage={'tr'}
					showToTopButton={true}
					selected={selectedBrand}
					showAlphabeticalIndex={true}
					autoGenerateAlphabeticalIndex={true}
					selectPlaceholderText={'Choose one...'}
					onEndReached={() => console.log('list ended...')}
					searchPlaceholderText={'Search...'}
					requireSelection={false}
					autoSort={false}
				/>

				<PickerModal
					renderSelectView={(disabled, selected, showModal) => (
						<Button
							disabled={disabled}
							title={
								typeof selectedModel.Name === 'string'
									? selectedModel.Name
									: 'Select Model'
							}
							onPress={showModal}
						/>
					)}
					onSelected={(it) => (selectedModel = it)}
					onClosed={console.log('just testin')}
					onBackButtonPressed={console.log('just testin')}
					items={[
						{
							Name: 'Model 1',
							//Value: 'Åland Islands',
							//Code: 'AX',
							//Id: 1,
						},
						{
							Name: 'Model 2',
						},
						{
							Name: 'Model 3',
						},
						{
							Name: 'Model 4',
						},
					]}
					sortingLanguage={'tr'}
					showToTopButton={true}
					selected={selectedBrand}
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
