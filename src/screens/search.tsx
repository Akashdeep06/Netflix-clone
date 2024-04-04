import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Play from 'react-native-vector-icons/AntDesign';
import Microphone from 'react-native-vector-icons/FontAwesome';
import {searchmovies} from '../constants/searchmovies';
import {Fonts} from '../constants/fonts';
interface renderDataProps {
  item: {
    uri: string;
    title: string;
  };
}
const Searchfunc = () => {
  const renderImages = ({item}: renderDataProps) => (
    <View style={styles.searchmovie}>
      <TouchableOpacity style={styles.preimgbut}>
        <Image source={{uri: item.uri}} style={styles.preimages} />
        <Text style={styles.text}>{item.title}</Text>
        <Play
          name="playcircleo"
          size={28}
          color={Colors.white}
          style={styles.play}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={20}
            color={Colors.white}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a show, movie, genre, etc"
            placeholderTextColor={Colors.white}
          />
          <Microphone
            name="microphone"
            size={20}
            color={Colors.white}
            style={styles.searchIcon2}
          />
        </View>
      </View>
      <View style={styles.pre}>
        <Text style={styles.previews}>Top Searches</Text>
        <FlatList
          data={searchmovies}
          renderItem={renderImages}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  pre: {
    top: 6,
    flex: 1,
  },
  preimages: {
    height: 90,
    width: 156,
  },
  searchmovie: {
    marginVertical: 2,
    backgroundColor: Colors.grey,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    fontSize: 16,
    marginHorizontal: 20,
  },
  preimgbut: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previews: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    left: 16,
    marginVertical: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
    bottom: 2,
  },
  searchIcon2: {
    marginRight: 6,
    bottom: 2,
  },
  play: {
    position: 'absolute',
    right: 14,
  },
  searchInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.poppinsLight,
    paddingVertical: 16,
  },
});

export default Searchfunc;
