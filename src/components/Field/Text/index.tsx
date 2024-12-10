import React, { PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';

interface Props {}

export function Text(props: PropsWithChildren<Props>) {
  const { children } = props;
  return <RNText>{children}</RNText>;
}
