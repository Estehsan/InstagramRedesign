import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';

interface iCarousel {
  images: string[];
}

const Carousel = ({images}: iCarousel) => {
  const [activeindex, setActiveindex] = useState(0);

  const onviewablity: ViewablityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveindex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        horizontal
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={onviewablity}
        pagingEnabled
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
      <View style={styles.Round}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dots,
              {backgroundColor: activeindex === index ? 'red' : 'green'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: 350,
    borderRadius: 20,
    marginRight: 10,
  },
  Round: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 14,
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
