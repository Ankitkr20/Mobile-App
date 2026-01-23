import React from 'react';
import { Text, StyleSheet } from 'react-native';

type IconName = 'empty' | 'cross' | 'circle';

export default function Icons({ name }: { name: IconName }) {
  if (name === 'cross') {
    return <Text style={[styles.icon, styles.cross]}>❌</Text>;
  }
  if (name === 'circle') {
    return <Text style={[styles.icon, styles.circle]}>⭕</Text>;
  }
  return null;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 42,
  },
  cross: {
    color: '#38CC77',
  },
  circle: {
    color: '#F7CD2E',
  },
});
