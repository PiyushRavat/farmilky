import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Scale } from '@src/lib/lib';
import { Colors } from '@src/Theme';

const styles = StyleSheet.create({
  headerContainer: {
    height: Scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Scale(15)
  },
  titleText: {
    color: '#fff',
    fontSize: Scale(25),
    fontWeight: 'bold',
    marginLeft: Scale(10),
    alignSelf: 'center',
  }
});

const BackHeader = (props) => {
  const { title, navigation } = props;
  return (
    <SafeAreaView style={{ backgroundColor: '#00A2B6' }}>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => navigation.pop()}
        >
          <Icon type="font-awesome" name="chevron-left" size={Scale(20)} color={Colors.White}/>
        </TouchableWithoutFeedback>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

export default BackHeader;
