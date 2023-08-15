import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
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
export default HomeHeader = () => (
  <View style={styles.container}>
    <View style={styles.wrapperLogoImg}>
      <Image style={styles.logoImg} source={require('../assets/logo.png')} />
      <Text style={styles.logotxt}>MASHRAI</Text>
    </View>
    <View style={styles.notificationContainer}>
      <Image
        style={styles.notificationImage}
        source={require('../assets/Notification.png')}
      />
    </View>
  </View>
);
