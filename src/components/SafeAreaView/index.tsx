import React, { PropsWithChildren } from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native';

import styles from './styles';

interface Props {
  wide?: boolean;
}

export function SafeAreaView(props: PropsWithChildren<Props>) {
  const { children, wide = false } = props;

  return (
    <RNSafeAreaView style={[styles.container, wide && styles.wide]}>
      {children}
    </RNSafeAreaView>
  );
}
