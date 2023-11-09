import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY, LIGHT, PRIMARY } from '../configs';
import MapView from 'react-native-maps';
import { Search } from '../screens/search';


function PaperNews() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
function Account() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function Menu() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabsNv() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIconStyle: {},
                // tabBarLabelPosition: 'beside-icon',
                tabBarStyle: { backgroundColor: LIGHT, elevation: 0, borderColor: LIGHT },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'grid' : 'ios-grid-outline';
                    }

                    if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    if (route.name === 'Account') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    if (route.name === 'Menu') {
                        iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: PRIMARY,
                tabBarInactiveTintColor: GRAY,
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator >
    );
}