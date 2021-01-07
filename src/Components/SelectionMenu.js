import React from 'react';
import {
	StyleSheet,
	View,
    Text,
    Button,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import AdjustLabel from '../Components/AdjustLabel';
import PickerModal from 'react-native-picker-modal-view';

const SelectionMenu = ( {selectedItem, providedItems} ) => {
	//let selectedItem = { Name: 'Select Brand' };
	let firstName = selectedItem.Name;
	return (
        <PickerModal
					renderSelectView={(disabled, selected, showModal) => (
						//<View style={[{marginTop: Dimensions.get('window').height / 50,
						//marginHorizontal: Dimensions.get('window').width / 10,}]}>
						<View style = {styles.buttonStyle}>
							<Button
								disabled={disabled}
								title={
									typeof selectedItem.Name === 'string'
										? selectedItem.Name
										: firstName
								}
								onPress={showModal}
							/>
						</View>
					)}
					onSelected={(it) => (selectedItem = it)}
					//onClosed={console.log('just testin')}
                    //onBackButtonPressed={console.log('just testin')}
                    items={providedItems}
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
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		fontSize: 18,
		color: 'white',
		marginTop: Dimensions.get('window').height / 50,
		marginHorizontal: Dimensions.get('window').width / 10,
	}
});

export default SelectionMenu;
