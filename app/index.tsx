import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Home' });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button
        title="Components List"
        onPress={() => {
          router.push('/components');
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
