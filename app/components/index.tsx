import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Components() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ title: 'Components' });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Components</Text>
      <Button
        title="AnimatedSwitcher"
        onPress={() => {
          router.push('/components/animated-switcher');
        }}
      />
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
