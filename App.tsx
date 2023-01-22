import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Pusher} from '@pusher/pusher-websocket-react-native';

const pusher = Pusher.getInstance(); // ТЕБЕ ИНТЕРЕСНА ЭТА СТРОЧКА

function App(): JSX.Element {
  // ТЕБЕ ЕЩЕ ИНТЕРЕСНО ТУТ
  pusher.init({
    apiKey: 'c3a62f6331e2e8f12695',
    cluster: 'eu',
    onSubscriptionSucceeded: event => {
      console.log('успешно подписались');
      console.log(event);
    },
    onEvent: event => {
      console.log(event);
    },
    onError: event => {
      console.log('error ' + event);
    },
    onConnectionStateChange: event => {
      console.log(event);
    },
  });
  let chatChannel = pusher.subscribe({
    channelName:
      'driver-channel' + 'fYc4sp4V1516hlaf2n8pksFvA4dY27rH' + '12756',
    onEvent: event => onEvent(event),
  });
  const onEvent = (event: any) => {
    console.log('event ' + event);
  };
  pusher.connect();
  return (
    <SafeAreaView>
      <StatusBar />
    </SafeAreaView>
  );
}

export default App;
