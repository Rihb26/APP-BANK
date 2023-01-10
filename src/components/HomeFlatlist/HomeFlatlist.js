import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  FlatList,
} from 'react-native';
import FlatlistItem from '../FlatlistItem/FlatlistItem';
import flatlistcontent from '../FlatlistItem/flatlistcontent';

const HomeFlatlist = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slidesRef = React.useRef(null);
  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;
  const viewableItemsChanged = React.useRef(({viewableItems}) => {
    console.log(viewableItems);
  }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={flatlistcontent}
        renderItem={({item}) => <FlatlistItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'BLUE',
  },
});

export default HomeFlatlist;
