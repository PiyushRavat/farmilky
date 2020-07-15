import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import { Scale } from '../../lib/lib';
import { DrawerActions } from 'react-navigation-drawer';
const styles = StyleSheet.create({
  headerContainer: {
    height: Scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Scale(15)
  },
  titleText: {
    color: '#fff',
    fontSize: Scale(25),
    fontWeight: 'bold'
  },
  drawerIcon: {
    height: Scale(30),
    width: Scale(30),
    tintColor: '#fff'
  }
});

const Header = (props) => {
  const { title, navigation } = props;
  return (
    <SafeAreaView style={{ backgroundColor: '#00A2B6' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableWithoutFeedback
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Text>menus</Text>
          {/* <Image source={require('@images/Icons/menu.png')} resizeMode="contain" style={styles.drawerIcon} /> */}
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

export default Header;
