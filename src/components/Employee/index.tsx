import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScreenParamsList } from '../../navigators/paramsList';
import { IEmployee } from '../../types/employee';
import styles from './styles';

type EmployeesStackProp = StackNavigationProp<ScreenParamsList, 'Employees'>;

interface Props {
  item: IEmployee;
}

export const Employee = (props: Props) => {
  const { item } = props;
  const { navigate } = useNavigation<EmployeesStackProp>();

  const goToEmployeeDetail = () => {
    navigate('EmployeeDetail', { employee: item });
  };

  return (
    <>
      {Platform.OS === 'android' ? (
        <TouchableOpacity
          style={styles.employeeItem}
          onPress={goToEmployeeDetail}>
          <View style={styles.employeeInfo}>
            <Text>
              {item?.firstname ?? 'FirstName'} {item?.lastname ?? 'LastName'}
            </Text>
            <Text>{item?.email ?? 'Email'}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.employeeAndroid}
          onPress={goToEmployeeDetail}>
          <View style={styles.employeeInfo}>
            <Text>
              {item?.firstname ?? 'FirstName'} {item?.lastname ?? 'LastName'}
            </Text>
            <Text>{item?.email ?? 'Email'}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
