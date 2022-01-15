import * as React from 'react';
import {StackActions} from '@react-navigation/routers';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const push = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

export const goBack = () => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
  }
};
