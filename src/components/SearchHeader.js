import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
      flex: 0.7,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
  },
  wrapperLogoImg: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImg: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
  },
  logotxt: {color: '#4d69ff', fontWeight: 'bold', padding: 5, fontSize: 17},
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  notificationImage: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
  },
});
export default SearchHeader = () => {
  const [text, onChangeText] = useState('Search Cars');
  const [number, onChangeNumber] = useState('');
  return (
    <View
      style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#4d69ff',
            borderRadius: 22,
          }}>
          <Text
            style={{
              color: 'white',
              // fontWeight: 'bold',
              padding: 5,
              fontSize: 15,
            }}>
            Filters
          </Text>
          <Image
            style={{width: 25, height: 25, resizeMode: 'stretch'}}
            source={require('../assets/Configure.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1.5,
          backgroundColor: '#ffffff',
          marginLeft: 10,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 22,
          borderColor: '#e9eaeb',
          borderWidth: 2,
        }}>
        <Image
          style={{width: 25, height: 25, resizeMode: 'stretch', margin: 5}}
          source={require('../assets/search.png')}
        />
        <TextInput
          style={{
            height: 40,
            margin: 12,
            padding: 5,
            width: 120,
            color: 'gray',
          }}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Search Cars"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};
