import { Text, View, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AnimatedSwitcher from '../AnimatedSwitcher';

export default function PlusMinus() {
  const [count, setCount] = useState(25);

  return (
    <View style={styles.container}>
      <Button title="⬇️" onPress={() => setCount((d) => Math.max(d - 1, 0))} />
      <View style={styles.row}>
        <AnimatedSwitcher
          height={50}
          RenderItem={RenderItem}
          index={Math.floor(count / 10) % 10}
        />
        <AnimatedSwitcher
          height={50}
          index={count % 10}
          RenderItem={RenderItem}
        />
      </View>
      <Button title="⬆️" onPress={() => setCount((d) => d + 1)} />
    </View>
  );
}

const RenderItem = ({ value }: { value: string }) => {
  return <Text style={styles.textStyle}>{value}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#333',
    paddingHorizontal: 8,
  },
  textStyle: {
    width: 25,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
