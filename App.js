import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {  } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';

function Feed() {
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#4d69ff',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarOptions: {
            activeTintColor: '#4d69ff',
            inactiveTintColor: 'gray',
          },
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'#4d69ff'} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Favorite',
          tabBarOptions: {
            activeTintColor: '#4d69ff',
            inactiveTintColor: 'gray',
          },
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={'#4d69ff'} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarOptions: {
            activeTintColor: '#4d69ff',
            inactiveTintColor: 'gray',
          },
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              color={'#4d69ff'}
              size={33}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
