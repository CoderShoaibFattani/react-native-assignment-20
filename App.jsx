import {Text, View} from 'react-native';
import React from 'react';

import Cards from './components/Cards';

// const styles = StyleSheet.create({
//   bigfont: {
//     fontSize: '40px',
//   },
// });

const App = () => {
  return (
    <View>
      <Text>Products</Text>
      <Cards />
    </View>
  );
};

export default App;
