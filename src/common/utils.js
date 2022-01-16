import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({$rem: Platform.OS === 'ios' ? 1.1 : 0.95});

export const scaledValue = val => EStyleSheet.value(`${val}rem`);
