import * as React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useWindowDimensions} from 'react-native';

import {View} from '@elements';

const EmptyCard = () => {
  const {width} = useWindowDimensions();
  const textWidth = width * 0.65;
  return (
    <View>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          paddingVertical={10}
          paddingHorizontal={20}>
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={10} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={textWidth} height={5} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={6} width={textWidth} height={5} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={6} width={textWidth} height={5} borderRadius={4} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default EmptyCard;
