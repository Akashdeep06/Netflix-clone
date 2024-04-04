import {
  FlatList,
  Image,
  ImageProps,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import {data2} from '../constants/addprofile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SocialMedia from 'react-native-vector-icons/FontAwesome';
import MoreAndCheck from 'react-native-vector-icons/Feather';
interface renderDataProps {
  item: {
    id: number;
    image: ImageProps;
    name: String;
  };
}
export default function More() {
  const renderItem = ({item}: renderDataProps) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.buttons}>
        <Image source={item.image} style={styles.userimage} />
        <Text style={styles.username}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FlatList
          horizontal
          data={data2}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.managetext}>
          <Icon
            name="pencil"
            size={20}
            color={Colors.white}
            style={styles.pencil}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Manage Profiles</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.message}>
            <Icon
              name="message-processing-outline"
              size={36}
              color={Colors.white}
            />
            <Text style={styles.infotext}>Tell friends about Netflix</Text>
          </View>
          <Text style={styles.loremtext}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit,
            laudantium at doloremque neque dicta quis eum
          </Text>
          <Text style={styles.terms}>Terms & Conditions</Text>
          <View style={styles.inputBtnContainer}>
            <TextInput style={styles.input} placeholder="enter" />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Copy Link</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity>
              <SocialMedia name="whatsapp" size={36} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity>
              <SocialMedia name="facebook" size={36} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity>
              <Icon name="gmail" size={36} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <View>
              <TouchableOpacity>
                <MoreAndCheck
                  name="more-horizontal"
                  size={36}
                  color={Colors.white}
                />
                <Text style={styles.moretext}>More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.mylist}>
            <MoreAndCheck
              name="check"
              size={24}
              color={Colors.white}
              style={styles.check}
            />
            <TouchableOpacity>
              <Text style={styles.listtext}>My List</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.listtext}>App Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.listtext}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.listtext}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.listtext}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  check: {
    left: 18,
    top: 6,
  },
  mylist: {
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 2,
    marginVertical: 6,
    flexDirection: 'row',
  },
  list: {},
  verticleLine: {
    height: '100%',
    width: 0.5,
    backgroundColor: Colors.white,
  },
  info: {
    backgroundColor: Colors.lightgrey,
  },

  icons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBtnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 18,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: Colors.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 4,
  },
  btntxt: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.poppinsBold,
    fontWeight: '900',
  },
  input: {
    backgroundColor: Colors.black,
    width: '76%',
    height: 40,
  },
  searchInput: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.poppinsLight,
    backgroundColor: Colors.black,
    marginHorizontal: 18,
    marginVertical: 8,
  },
  managetext: {
    justifyContent: 'center',
    marginVertical: 14,
    flexDirection: 'row',
  },
  terms: {
    color: Colors.white,
    textDecorationLine: 'underline',
    fontSize: 14,
    marginVertical: 10,
    fontFamily: Fonts.poppinsLight,
    marginHorizontal: 18,
  },
  message: {
    flexDirection: 'row',
    marginTop: 22,
    left: 18,
  },
  pencil: {
    marginRight: 6,
  },
  item: {
    marginTop: 26,
    left: 2,
  },
  buttons: {
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.poppinsLight,
    fontSize: 16,
  },
  loremtext: {
    color: Colors.white,
    fontFamily: Fonts.poppinsLight,
    fontSize: 12,
    marginHorizontal: 18,
    marginVertical: 8,
  },
  infotext: {
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    fontSize: 20,
    left: 8,
  },
  listtext: {
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    fontSize: 16,
    marginVertical: 6,
    left: 28,
  },
  moretext: {
    color: Colors.white,
    fontFamily: Fonts.poppinsMedium,
    fontSize: 14,
    textAlign: 'center',
  },
  username: {
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: Fonts.poppinsMedium,
  },
  userimage: {
    width: 70,
    height: 64,
    borderRadius: 10,
    marginHorizontal: 4,
  },
});
