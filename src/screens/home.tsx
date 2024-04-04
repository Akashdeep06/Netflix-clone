import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {images} from '../assets';
import {Colors} from '../constants/colors';
import {options} from '../constants/options';
import Icon from 'react-native-vector-icons/FontAwesome';
import Info from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/AntDesign';
import {previews} from '../constants/previews';
import {Movies} from '../constants/movies';
import {Fonts} from '../constants/fonts';
interface renderDataProps {
  item: {
    id: number;
    name: String;
  };
}
interface renderImagesProps {
  item: {
    id: number;
    images: string;
  };
}
const HomeScreen = () => {
  const renderItem = ({item}: renderDataProps) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderImages = ({item}: renderImagesProps) => (
    <TouchableOpacity style={styles.preimgbut}>
      <Image source={{uri: item.images}} style={styles.preimages} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View>
          <Image source={images.war} style={styles.image} />
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.optionsContainer}>
            <FlatList
              horizontal
              data={options}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.trend}>#2 in Nigeria Today</Text>
          </View>
        </View>

        <View style={styles.medium}>
          <View style={styles.button}>
            <Plus name="plus" size={24} style={styles.icon1} />
            <Text style={styles.text2}>My List</Text>
          </View>
          <View style={styles.playContainer}>
            <View style={styles.play}>
              <Icon name="play" size={24} style={styles.icon} />
              <Text style={styles.playText}>Play</Text>
            </View>
          </View>
          <View style={styles.button}>
            <Info name="info" size={24} style={styles.icon1} />
            <Text style={styles.text2}>info</Text>
          </View>
        </View>

        <View style={styles.pre}>
          <Text style={styles.previews}>Previews</Text>
          <FlatList
            horizontal
            data={previews}
            renderItem={renderImages}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View style={styles.sectionListContainer}>
          <FlatList
            data={Movies}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.movieText}>{item.title}</Text>
                  <ScrollView horizontal>
                    {item?.data?.map(item => {
                      return (
                        <View style={styles.movies}>
                          <Image
                            style={styles.sectionItem}
                            source={{uri: item}}
                          />
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pre: {
    top: 6,
  },
  movies: {
    paddingEnd: 12,
  },
  movieText: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
  },
  previews: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    left: 16,
  },
  preimages: {
    height: 120,
    width: 120,
    borderRadius: 70,
  },
  preimgbut: {
    borderRadius: 70,
    marginHorizontal: 4,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  playContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  medium: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
  },
  button: {
    flexDirection: 'column',
  },
  play: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 48,
    width: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  playText: {
    marginLeft: 12,
    color: Colors.black,
    fontSize: 22,
    top: 4,
    fontFamily: Fonts.poppinsBold,
  },
  icon: {
    color: Colors.black,
  },
  icon1: {
    color: Colors.white,
    textAlign: 'center',
  },
  trend: {
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    fontSize: 16,
  },
  optionsContainer: {
    position: 'absolute',
    top: 16,
    gap: 10,
    right: 10,
    zIndex: 1,
    alignItems: 'flex-end',
  },
  item: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
  },
  text2: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
  },
  logo: {
    height: 66,
    width: 66,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  image: {
    width: '100%',
    height: 450,
  },
  sectionListContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    marginTop: 10,
    marginBottom: 5,
  },
  sectionItem: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 10,
    height: 170,
    width: 120,
  },
});

export default HomeScreen;
