import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
    TouchableOpacity,
  StatusBar
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 20,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
  },
  title: {
    fontSize: 32,
    color: 'red',
  },
});
export default  Item = ({item}) => (
  <View style={styles.item}>
    <View style={{flex: 5, flexDirection: 'row'}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignSelf: 'center',
          padding: 5,
        }}>
        <Image
          style={{
            width: '95%',
            height: '95%',
            resizeMode: 'cover',
            borderRadius: 22,
          }}
          source={{uri: item.image2}}
        />
      </View>
      <View style={{flex: 5}}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View style={{flex: 5, margin: 10}}>
            <Text
              style={{
                textAlign: 'left',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {item.brand}
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: 'black',
                fontSize: 18,
              }}>
              {item.shape} {item.gear_id}
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: '#4d69ff',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {'SR'} {item.price}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: 7,
            }}>
            <Image
              style={{width: 44, height: 44, resizeMode: 'stretch'}}
              source={require('../assets/Favorited.png')}
            />
          </View>
        </View>

        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 20, height: 20, resizeMode: 'stretch'}}
              source={require('../assets/Calendar.png')}
            />
            <Text
              style={{
                textAlign: 'left',
                color: 'black',
                fontSize: 15,
                marginHorizontal: 5,
              }}>
              {item.model_year}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 20, height: 20, resizeMode: 'stretch'}}
              source={require('../assets/Odometer.png')}
            />
            <Text
              style={{
                textAlign: 'left',
                color: 'black',
                fontSize: 15,
                marginHorizontal: 5,
              }}>
              {item.kilometer}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 20, height: 20, resizeMode: 'stretch'}}
              source={require('../assets/Location.png')}
            />
            <Text
              style={{
                textAlign: 'left',
                color: 'black',
                fontSize: 15,
                marginHorizontal: 5,
              }}>
              {item.city}
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View
      style={{
        flex: 10,
        flexDirection: 'row',
        borderColor: '#e9eaeb',
        borderTopWidth: 6,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Image
          style={{width: 90, height: 20, resizeMode: 'stretch', margin: 10}}
          source={require('../assets/Frame.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}>
        <Image
          style={{width: 90, height: 20, resizeMode: 'stretch', margin: 10}}
          source={require('../assets/Rate.png')}
        />
      </View>
    </View>
  </View>
);
