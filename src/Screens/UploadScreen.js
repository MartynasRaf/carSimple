import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PickerModal from 'react-native-picker-modal-view';
import SelectionMenu from '../Components/SelectionMenu';
import Input from '../Components/Input';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DatePicker from 'react-native-modern-datepicker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const UploadScreen = () => {
	let selectBrand = { Name: 'Select Brand' };
	let selectMake = { Name: 'Select Make' };
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedIndex2, setSelectedIndex2] = useState(0);
	const [selectedIndex3, setSelectedIndex3] = useState(0);
	const [selectedIndex4, setSelectedIndex4] = useState(0);
	const [selectedIndex5, setSelectedIndex5] = useState(0);
	const [selectedDate, setDate] = useState('');
	const [shouldShow, setShouldShow] = useState(false);
	const [shouldShowDateButton, setShouldShowDateButton] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	
	
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
	const handleSingleIndexSelect3 = (index) => {
		// For single Tab Selection SegmentedControlTab
		setSelectedIndex3(index);
	};
	const handleSingleIndexSelect4 = (index) => {
		// For single Tab Selection SegmentedControlTab
		setSelectedIndex4(index);
	};
	const handleSingleIndexSelect5 = (index) => {
		// For single Tab Selection SegmentedControlTab
		setSelectedIndex5(index);
	};


	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
	
		if (permissionResult.granted === false) {
		  alert('Permission to access camera roll is required!');
		  return;
		}
	
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
	
		if (pickerResult.cancelled === true) {
		  return;
		}
	
		setSelectedImage({ localUri: pickerResult.uri });
	  };
  

	return (
		<SafeAreaView style={styles.mainScreenStyle}>
			<ScrollView style={styles.backgroundStyle}>
				<SelectionMenu selectedItem = {selectBrand} providedItems={[
						{Name: 'Audi'},
						{Name: 'BMW'},
						{Name: 'Volvo'},
						{Name: 'Lada'}
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
					<Input givenText="Price:" keyboard='numeric'/>
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
					<View>
					<TouchableOpacity style={styles.buttonStyle2}
						title= {"Year bought: " + selectedDate}
						onPress={() => setShouldShow(!shouldShow)}
					>
						<Text>
							{"Year bought: " + selectedDate}
						</Text>
					</TouchableOpacity>
					<Input givenText="Kilometers driven:" keyboard='numeric'/>
					</View>
					
						) : null}
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
					<View style={styles.container} >
					<SegmentedControlTab
						values={['Mechanic', 'Automatic']}
						selectedIndex={selectedIndex3}
						tabStyle={styles.tabStyle}
						activeTabStyle={styles.activeTabStyle}
						onTabPress={handleSingleIndexSelect3}
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
					<View style={styles.container} >
						<Text>
							Steering wheel side:
						</Text>
					<SegmentedControlTab
						values={['Left', 'Right']}
						selectedIndex={selectedIndex4}
						tabStyle={styles.tabStyle}
						activeTabStyle={styles.activeTabStyle}
						onTabPress={handleSingleIndexSelect4}
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
					<View style={styles.container} >
						<Text>
							Drive wheels:
						</Text>
					<SegmentedControlTab
						values={['Rear', 'Front', 'All']}
						selectedIndex={selectedIndex5}
						tabStyle={styles.tabStyle}
						activeTabStyle={styles.activeTabStyle}
						onTabPress={handleSingleIndexSelect5}
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
					<Input givenText="Color:"/>
					<TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonStyle}>
						<Text>
							Upload your vechicle photo!
						</Text>
					</TouchableOpacity>
					<View style={styles.container2}>
						{selectedImage != null ?
							<Image
								source={{ uri: selectedImage.localUri }}
								style={styles.thumbnail}
							/>
						: <Image
							source={{ uri: 'https://creativeglobal.co.in/mcp/uploads/product/original/no_image.jpg' }}
							style={styles.thumbnail}
						/>}
					</View>
					<TouchableOpacity style={styles.buttonStyle3}>
						<Text>
							UPLOAD AD
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
	buttonStyle2: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#EE6F57',
		marginTop: 15,
		borderRadius: 50,
		width: 200,
		height: 40,
	},
	buttonStyle3: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#EE6F57',
		marginTop: 15,
		borderRadius: 50,
		width: 100,
		height: 50,
	},
	thumbnail: {
		width: 300,
		height: 300,
		resizeMode: "contain"
	},
	container2: {
		marginTop: 50,
		//marginBottom: 50,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
});
export default UploadScreen;

/*
					onSelected={this.onSelected.bind(this)}
					onClosed={this.onClosed.bind(this)}
					onBackButtonPressed={this.onBackButtonPressed.bind(this)}
*/
