import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  console.log(
    'Logging working completely fine. Logs in terminal using metro server for android & logs in browser console for Web!!Debugger also tested!!!',
  );
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>
        Yay ..... I am in my MoviesApp Codebase... running applications on both
        Msite & App... properly tested!! Debugger Testing: Further Changes WIP!!!
      </Text>
    </View>
  );
};
export default App;
