import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BrowseScreen from './src/Screens/BrowseScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import UploadScreen from './src/Screens/UploadScreen';
import { color } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import SignInScreen from './src/Screens/SignInScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#ee6f57',
		background: '#DCEFF9',
	},
};

const browseIcon = <FontAwesome name='th-list' size={24} color='black' />;

function ProfileNav() {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Profile' component={ProfileScreen} />
			<Stack.Screen name='SignIn' component={SignInScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer theme={MyTheme}>
				<Tab.Navigator
					tabBarOptions={{
						activeBackgroundColor: '#ee6f57',
						inactiveBackgroundColor: '#ee6f57',
						activeTintColor: 'white',
						inactiveTintColor: 'grey',
						showLabel: true,
					}}
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Browse') {
								iconName = focused ? 'th-list' : 'th-list';
							} else if (route.name == 'Upload') {
								iconName = focused ? 'cart-plus' : 'cart-plus';
							} else if (route.name == 'Profile') {
								iconName = focused
									? 'user-circle'
									: 'user-circle';
							}

							// You can return any component that you like here!
							return (
								<FontAwesome
									name={iconName}
									size={size}
									color={color}
								/>
							);
						},
					})}
				>
					<Tab.Screen
						name='Browse'
						component={BrowseScreen}
						options={{ title: 'Browse' }}
					/>
					<Tab.Screen
						name='Upload'
						component={UploadScreen}
						options={{ title: 'Upload' }}
					/>
					<Tab.Screen
						name='Profile'
						component={ProfileNav}
						options={{ title: 'Profile' }}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
