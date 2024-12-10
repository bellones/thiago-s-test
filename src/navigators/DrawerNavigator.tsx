// eslint-disable-next-line import/no-extraneous-dependencies
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { EmployeesScreen } from '../screens/Employees';
import { ProfileScreen } from '../screens/Profile';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Employees" component={EmployeesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
