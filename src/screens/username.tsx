import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageProps,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/colors';
import {data} from '../constants/usersdata';
import {StackNavigationProp} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import {Fonts} from '../constants/fonts';
import {images} from '../assets';

interface User {
  id: string;
  name: string;
  image: ImageProps;
}

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  YourScreenName: {customParam: string};
};

export default function Username({navigation}: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setcount] = useState(0);
  const numOfCol = 2;
  const addUser = () => {
    if (count >= 4) {
    } else {
      console.log('HIii');
      console.log({d: data[0].name});
      const newUser = {
        name: data[count].name,
        image: require('../assets/images/Rectangle2.png'),
      };
      firestore()
        .collection('userProfiles')
        .add(newUser)
        .then(() => {
          console.log('Added succ');
        })
        .catch(err => {
          console.log({err});
        });
      setcount(count + 1);
    }
  };
  console.log(count);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('userProfiles')
      .onSnapshot(snapshot => {
        const profiles = [];
        snapshot.forEach(doc => {
          profiles.push({id: doc.id, ...doc.data()});
        });
        console.log({profiles});
        setUsers(profiles);
      });
    console.log({unsubscribe});
    return () => unsubscribe();
  }, []);
  const renderItem = ({item}: {item: User}) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Home')}>
        <Image source={item.image} style={styles.userimage} />
        <Text style={styles.username}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={images.netflixlogo} style={styles.profileImage} />
        </View>
        <Icon name="pencil" size={26} style={styles.icon} />
      </View>
      <FlatList
        data={users}
        contentContainerStyle={styles.profiles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numOfCol}
      />
      <TouchableOpacity onPress={addUser} style={styles.addButton}>
        <Image source={images.addprofile} style={styles.item} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  profiles: {
    flexGrow: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 28,
    padding: 6,
  },
  buttons: {
    alignItems: 'center',
  },
  username: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.poppinsMedium,
  },
  userimage: {
    marginBottom: 6,
  },
  icon: {
    color: Colors.white,
    position: 'absolute',
    right: 20,
  },
  profileImage: {
    width: 138,
    height: 38,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
