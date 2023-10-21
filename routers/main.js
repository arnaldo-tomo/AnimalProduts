import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Oneboarding } from '../screens/oneboarding';
import { Product } from '../screens/Product';
import { Payment } from '../screens/Payment';
import TabsNv from './tabs';



const Stack = createNativeStackNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Oneboarding" component={Oneboarding} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={TabsNv} options={{ headerShown: false }} />
                <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;