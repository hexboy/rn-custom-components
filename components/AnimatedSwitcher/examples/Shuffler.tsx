import { Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedSwitcher from '../AnimatedSwitcher';

const emojis = ['❌', '⚠️', '🚀', '🎂', '🎁', '♻️', '🏓', '🧲', '💰'];

export default function Shuffler() {
  const [indexes, setIndexes] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexes([
        Math.floor(Math.random() * emojis.length),
        Math.floor(Math.random() * emojis.length),
        Math.floor(Math.random() * emojis.length),
        Math.floor(Math.random() * emojis.length),
      ]);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AnimatedSwitcher
          height={80}
          items={emojis}
          index={indexes[0]}
          RenderItem={RenderItem}
        />
        <AnimatedSwitcher
          height={80}
          items={emojis}
          index={indexes[1]}
          RenderItem={RenderItem}
        />
        <AnimatedSwitcher
          height={80}
          items={emojis}
          index={indexes[2]}
          RenderItem={RenderItem}
        />
      </View>
    </View>
  );
}

const RenderItem = ({ value }: { value: string }) => {
  return <Text style={styles.textStyle}>{value}</Text>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  textStyle: {
    width: 70,
    fontSize: 60,
    lineHeight: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
