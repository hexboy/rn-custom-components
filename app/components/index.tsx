import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Components() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Components' });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Component A</Text>
      <StatusBar style="auto" />
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
