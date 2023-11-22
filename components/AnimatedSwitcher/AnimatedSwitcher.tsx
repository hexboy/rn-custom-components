import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Text, View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import React, { useEffect, useMemo, memo } from 'react';

const DefaultRenderItem = ({ value }: { value: any }) => (
  <Text style={styles.text}>{value}</Text>
);

const defaultItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AnimatedSwitcher({
  index = 0,
  items = defaultItems,
  height = 30,
  style = null,
  RenderItem = DefaultRenderItem,
}: {
  index: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  items?: any[];
  RenderItem?: ({
    value,
    index,
  }: {
    value: any;
    index: number;
  }) => React.JSX.Element;
}) {
  const len = items.length;
  const prevIndex = useSharedValue(-1);
  const translateY = useSharedValue((-len - 1) * height);

  useEffect(() => {
    if (len === 1) return;

    const newIndex = index % len;
    let pos = (newIndex - len - 1) * height;
    if (prevIndex.value === len - 1 && newIndex !== len - 2) {
      pos = -1 * height;
    } else if (prevIndex.value === 0 && newIndex === 1) {
      translateY.value = -1 * (len + 1) * height;
    } else if (prevIndex.value === 0 && newIndex === len - 1) {
      translateY.value = -1 * height;
    }
    if (prevIndex.value === -1) {
      translateY.value = pos;
    } else {
      translateY.value = withSpring(pos, {
        mass: 1,
        damping: 20,
        stiffness: 500,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
    }
    prevIndex.value = newIndex;
  }, [index, items]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  }, []);

  const containerStyle = useMemo(
    () => [
      styles.container,
      style,
      {
        height,
      },
    ],
    [height, style]
  );

  return (
    <View style={containerStyle}>
      <Animated.View style={animatedStyle}>
        <RenderItems items={items} RenderItem={RenderItem} />
      </Animated.View>
    </View>
  );
}

const RenderItems = memo(
  ({
    items,
    RenderItem,
  }: {
    items: any[];
    RenderItem: ({
      value,
      index,
    }: {
      value: any;
      index: number;
    }) => React.JSX.Element;
  }) => {
    if (!items || items.length === 0) return null;
    if (items.length === 1) {
      return <RenderItem value={items[0]} index={0} />;
    }
    return (
      <>
        <RenderItem value={items[1]} index={1} />
        <RenderItem value={items[0]} index={0} />
        {items.map((_item, index) => (
          <RenderItem
            value={items[items.length - index - 1]}
            index={index}
            key={index}
          />
        ))}
        <RenderItem value={items[items.length - 1]} index={items.length - 1} />
        <RenderItem value={items[items.length - 2]} index={items.length - 2} />
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
  },
});
