import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Counter from '../../components/AnimatedSwitcher/examples/Counter';
import Shuffler from '../../components/AnimatedSwitcher/examples/Shuffler';
import PlusMinus from '../../components/AnimatedSwitcher/examples/PlusMinus';
import ShuffleProfileImage from '../../components/AnimatedSwitcher/examples/ShuffleProfileImage';

export default function AnimatedSwitcherPage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'AnimatedSwitcher' });
  }, []);
  return (
    <View style={styles.container}>
      <Counter />
      <Shuffler />
      <PlusMinus />
      <ShuffleProfileImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
