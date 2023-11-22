import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedSwitcher from '../AnimatedSwitcher';

const names = [
  'Roberta Sampson',
  'Pedro Schmidt',
  'Josiah Graham',
  'Kacie Cobb',
  'Edmund Vance',
  'Grayson Leblanc',
  'Angelina Gonzales',
  'Aliyah Hall',
  'Everett Wells',
  'Nicholas Chase',
];

export default function ShuffleProfileImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * names.length));
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedSwitcher
        height={80}
        items={names}
        index={index}
        RenderItem={RenderItem}
      />
    </View>
  );
}

const RenderItem = ({ value }: { value: string }) => {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'https://robohash.org/' + value }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 8,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 80,
    height: 80,
  },
});
