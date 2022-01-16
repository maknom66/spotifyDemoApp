import React from 'react';
import {Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

import {authURI} from '@api/spotify';
import {useSpotifyAuth} from '@src/common/store';

const SpotifyAuth = () => {
  const accessToken = useSpotifyAuth(state => state?.accessToken);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!accessToken}
      onRequestClose={() => setIsLoginModalVisible(false)}>
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: authURI}} />
      </SafeAreaView>
    </Modal>
  );
};

export default SpotifyAuth;
