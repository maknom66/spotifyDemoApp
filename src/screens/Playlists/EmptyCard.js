import * as React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {View} from '@elements';

const EmptyCard = () => (
  <View>
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" padding={20}>
        <SkeletonPlaceholder.Item width={120} height={120} borderRadius={10} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={10} borderRadius={4} />
          <SkeletonPlaceholder.Item marginTop={6} width={120} height={10} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  </View>
);

export default EmptyCard;
