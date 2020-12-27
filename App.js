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
import SignUpScreen from './src/Screens/SignUpScreen';
import DetailedCarScreen from './src/Screens/DetailedCarScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { decode, encode } from 'base-64';

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
			<Stack.Screen name='SignUp' component={SignUpScreen} />
			<Stack.Screen name='Detailed' component={DetailedCarScreen} />
		</Stack.Navigator>
	);
}

function BrowseNav() {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Browse' component={BrowseScreen} />
			<Stack.Screen name='Detailed' component={DetailedCarScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	if (!global.btoa) {
		global.btoa = encode;
	}

	if (!global.atob) {
		global.atob = decode;
	}

	return (
		<AuthProvider>
			<SafeAreaProvider>
				<NavigationContainer theme={MyTheme}>
					<Tab.Navigator
						tabBarOptions={{
							activeBackgroundColor: '#ee6f57',
							inactiveBackgroundColor: '#ee6f57',
							activeTintColor: 'white',
							inactiveTintColor: 'black',
							showLabel: true,
						}}
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								if (route.name === 'Browse') {
									iconName = 'th-list';
								} else if (route.name == 'Upload') {
									iconName = 'cart-plus';
								} else if (route.name == 'Profile') {
									iconName = 'user-circle';
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
							component={BrowseNav}
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
		</AuthProvider>
	);
}
