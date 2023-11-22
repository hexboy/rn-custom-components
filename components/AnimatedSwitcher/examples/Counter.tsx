import { Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedSwitcher from '../AnimatedSwitcher';

export default function Counter() {
  const [count, setCount] = useState(980);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{count}</Text>
      <View>
        <View style={styles.circlesRow}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>

        <View style={styles.row}>
          <AnimatedSwitcher
            height={50}
            index={Math.floor((count / 1000) % 10)}
            style={styles.item}
            RenderItem={RenderItem}
          />
          <AnimatedSwitcher
            height={50}
            index={Math.floor((count / 100) % 10)}
            style={styles.item}
            RenderItem={RenderItem}
          />
          <AnimatedSwitcher
            height={50}
            index={Math.floor((count / 10) % 10)}
            style={styles.item}
            RenderItem={RenderItem}
          />
          <AnimatedSwitcher
            height={50}
            index={Math.floor(count % 10)}
            style={[styles.item, styles.lastItem]}
            RenderItem={RenderItem}
          />
        </View>

        <View style={[styles.circlesRow, { top: undefined, bottom: -8 }]}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </View>
    </View>
  );
}

const RenderItem = ({ value }: { value: number }) => {
  return <Text style={styles.text}>{value}</Text>;
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
  },
  item: {
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: '#ff5722',
  },
  lastItem: {
    backgroundColor: '#e91e63',
  },
  text: {
    width: 40,
    fontSize: 18,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  circlesRow: {
    left: -10,
    right: -10,
    top: -8,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 20,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
