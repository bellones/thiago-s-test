import React, { PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';
import styles from '../styles';

interface Props {}

export function Label(props: PropsWithChildren<Props>) {
  const { children } = props;

  return <RNText style={styles.label}>{children}</RNText>;
}
