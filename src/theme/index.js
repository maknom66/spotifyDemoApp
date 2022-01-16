import {scaledValue} from '@common/utils';

const scaledValueAliases = {
  xxs: scaledValue(10),
  xs: scaledValue(12),
  s: scaledValue(14),
  m: scaledValue(16),
  l: scaledValue(18),
  xl: scaledValue(24),
  xxl: scaledValue(32),
};

const theme = {
  fontSizes: {
    ...scaledValueAliases,
  },
  space: {
    ...scaledValueAliases,
  },
};

export default theme;
