import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants/colors';
import {soon} from '../constants/comingsoondata';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-vector-icons/Fontisto';
import {Fonts} from '../constants/fonts';

interface renderDataProps {
  item: {
    id: number;
    uri: string;
    release: string;
    name: string;
    description: string;
    genre: string[];
  };
}
const ComingSoon = () => {
  const renderImages = ({item}: renderDataProps) => (
    <View style={styles.searchmovie}>
      <TouchableOpacity style={styles.preimgbut}>
        <Image
          source={{uri: item.uri}}
          style={styles.preimages}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <View style={styles.share}>
        <Icon name="bell" size={22} color={Colors.white} style={styles.bell} />
        <Share
          name="share"
          size={22}
          color={Colors.white}
          style={styles.shareicon}
        />
      </View>
      <View style={styles.about}>
        <Text style={styles.reltext}>{item.release}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.descript}>{item.description}</Text>
      </View>
      <Text style={styles.reltext1}>{item.genre.join(' . ')}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={soon}
        renderItem={renderImages}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  searchmovie: {
    marginVertical: 2,
    backgroundColor: Colors.black,
    marginHorizontal: 8,
  },
  about: {
    marginHorizontal: 12,
  },
  preimages: {
    height: 170,
    width: '100%',
  },
  preimgbut: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  share: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  reltext: {
    color: Colors.white,
    fontFamily: Fonts.poppinsLight,
    fontSize: 12,
  },
  reltext1: {
    color: Colors.white,
    fontFamily: Fonts.poppinsLight,
    fontSize: 12,
    left: 12,
    marginVertical: 8,
  },
  bell: {
    position: 'absolute',
    right: 76,
  },
  shareicon: {
    position: 'absolute',
    right: 10,
  },
  name: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    fontWeight: '400',
  },
  descript: {
    marginVertical: 2,
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.poppinsLight,
    lineHeight: 16,
  },
});

export default ComingSoon;
