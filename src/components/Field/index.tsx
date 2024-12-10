import React from 'react';
import { View } from 'react-native';
import { Label } from './Label';
import { Text } from './Text';
import styles from './styles';

interface Props {
  label: string;
  value: string;
}

export function Field(props: Props) {
  const { label, value } = props;
  return (
    <View style={styles.container}>
      <Label>{label}: </Label>
      <Text>{value}</Text>
    </View>
  );
}
