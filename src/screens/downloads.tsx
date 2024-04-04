import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
const Downloads = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Smart Downloads</Text>
      </View>
      <View>
        <Text style={styles.head}>Introducing Downloads For You</Text>
        <Text style={styles.bodyText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          autem, voluptatem dolor aliquam esse maxime voluptate harum iste
          deleniti earum?{' '}
        </Text>
      </View>
      <View style={styles.circleViewContainer}>
        <View style={styles.circleView} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>SETUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>Find something to download</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Downloads;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    marginHorizontal: 18,
    fontFamily: Fonts.poppinsMedium,
  },
  head: {
    color: Colors.white,
    fontSize: 24,
    marginHorizontal: 18,
    fontFamily: Fonts.poppinsMedium,
    fontWeight: '700',
    marginTop: 22,
  },
  bodyText: {
    color: Colors.white,
    fontSize: 12,
    marginHorizontal: 18,
    fontFamily: Fonts.poppinsMedium,
    marginVertical: 8,
  },
  circleViewContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  circleView: {
    backgroundColor: Colors.grey,
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  btn: {
    backgroundColor: Colors.blue,
    width: '90%',
    paddingVertical: 8,
    marginVertical: 16,
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
  btn2: {
    backgroundColor: Colors.grey,
    width: '60%',
    paddingVertical: 8,
    marginVertical: 16,
  },
});
