import {scaledValue} from '@common/utils';

const theme = {
  sizes: {
    xs: () => scaledValue(12),
    sm: () => scaledValue(14),
    md: () => scaledValue(16),
    lg: () => scaledValue(18),
    xl: () => scaledValue(16),
    xxl: () => scaledValue(32),
  },
};

export default theme;
