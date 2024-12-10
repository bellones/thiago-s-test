import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EmployeeDetailScreen, EmployeesScreen } from '../screens';
import { MainScreen } from '../screens/Main';
import { ScreenParamsList } from './paramsList';

const Stack = createNativeStackNavigator<ScreenParamsList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerTintColor: '#6C3ECD',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen component={MainScreen} name="MainScreen" />
      <Stack.Screen component={EmployeesScreen} name="Employees" />
      <Stack.Screen component={EmployeeDetailScreen} name="EmployeeDetail" />
    </Stack.Navigator>
  );
}
