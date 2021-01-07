import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PickerModal from 'react-native-picker-modal-view';
import SelectionMenu from '../Components/SelectionMenu';
import Input from '../Components/Input';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DatePicker from 'react-native-modern-datepicker';
import ImageBrowser from '../Components/ImageBrowser';

const UploadScreen = () => {
	let selectBrand = { Name: 'Select Brand' };
	let selectMake = { Name: 'Select Make' };
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedIndex2, setSelectedIndex2] = useState(0);
	const [selectedDate, setDate] = useState('');
	const [shouldShow, setShouldShow] = useState(false);
	const [shouldShowDateButton, setShouldShowDateButton] = useState(false);

	
	const handleSingleIndexSelect = (index) => {
		// For single Tab Selection SegmentedControlTab
		console.log({selectedDate});
		setSelectedIndex(index);
		setShouldShowDateButton(index);
		//setShouldShow(index)
		if(index == 0){
			setShouldShow(false)
		}
	};
	const handleSingleIndexSelect2 = (index) => {
		// For single Tab Selection SegmentedControlTab
		setSelectedIndex2(index);
	};
	
	/*imageBrowserCallback = (callback) => {
		callback.then((photos) => {
		  console.log(photos)
		  this.setState({
			imageBrowserOpen: false,
			photos
		  })
		}).catch((e) => console.log(e))
	  }*/

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<ImageBrowser max={4} />
			<ScrollView style={styles.backgroundStyle}>
				<SelectionMenu selectedItem = {selectBrand} providedItems={[
						{
							Name: 'Audi',
							//Value: 'Åland Islands',
							//Code: 'AX',
							//Id: 1,
						},
						{
							Name: 'BMW',
							//Value: 'Albania',
							//Code: 'AL',
							//Id: 2,
						},
						{
							Name: 'Volvo',
							//Value: 'Algeria',
							//Code: 'DZ',
							//Id: 3,
						},
						{
							Name: 'Lada',
							//Value: 'American Samoa',
							//Code: 'AS',
							//Id: 4,
						},
					]}/>
				<SelectionMenu selectedItem = {selectMake} providedItems={[
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
							//Value: 'Algeria',
							//Code: 'DZ',
							//Id: 3,
						},
						{
							Name: 'Lada',
							//Value: 'American Samoa',
							//Code: 'AS',
							//Id: 4,
						},
					]}/>
					<Input givenText="Price:"/>
					<View style={styles.container}>
					<SegmentedControlTab
						values={['New', 'Used']}
						selectedIndex={selectedIndex}
						tabStyle={styles.tabStyle}
						activeTabStyle={styles.activeTabStyle}
						onTabPress={handleSingleIndexSelect}
						tabStyle={{
							backgroundColor: 'white',
							borderWidth: 0,
							borderColor: 'transparent'
						  }}
						activeTabStyle={{backgroundColor: '#ee6f57'}}
						tabTextStyle={{color: '#444444', fontWeight: 'bold'}}
						activeTabTextStyle={{color: 'black'}}
					/>
					</View>
					<View>
					{shouldShowDateButton ? (
					<Button
						title= {"Year bought: " + selectedDate}
						onPress={() => setShouldShow(!shouldShow)}
						/>) : null}
						{shouldShow ? (
							<DatePicker
								mode="monthYear"
								selectorStartingYear={2000}
								onMonthYearChange={selectedDate => setDate(selectedDate)}
							/>
						) : null}
					</View>
					<View style={styles.container} >
					<SegmentedControlTab
						values={['Diesel', 'Petrol', 'Gas', 'Hybrid', 'Electric']}
						selectedIndex={selectedIndex2}
						tabStyle={styles.tabStyle}
						activeTabStyle={styles.activeTabStyle}
						onTabPress={handleSingleIndexSelect2}
						tabStyle={{
							backgroundColor: 'white',
							borderWidth: 0,borderColor: 'transparent'
						  }}
						activeTabStyle={{backgroundColor: '#ee6f57'}}
						tabTextStyle={{color: '#444444', fontWeight: 'bold'}}
						activeTabTextStyle={{color: 'black'}}
					/>
					</View>
					<TouchableOpacity style={styles.buttonStyle}>
						<Text>
							My button
						</Text>
					</TouchableOpacity>
		</ScrollView>

		
		</SafeAreaView>
		
	);
};

const styles = StyleSheet.create({
	mainScreenStyle: {
		backgroundColor: '#EE6F57',
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1
	 },
	backgroundStyle: {
		backgroundColor: '#DCEFF9',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 16,
		marginBottom: 15,
		marginTop: 15
	  },
	buttonStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#EE6F57',
		marginTop: 15,
		borderRadius: 50,
		width: 200,
		height: 40,
	},
});
export default UploadScreen;

/*
					onSelected={this.onSelected.bind(this)}
					onClosed={this.onClosed.bind(this)}
					onBackButtonPressed={this.onBackButtonPressed.bind(this)}
*/
