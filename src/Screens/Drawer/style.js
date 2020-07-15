import {
  StyleSheet,
} from 'react-native';
import { Scale } from '../../lib/lib';

export default StyleSheet.create({
  drawerContainer: {
    flex: 1
  },
  drawerItem: {
    paddingVertical: Scale(15),
    justifyContent: 'center',
    paddingLeft: Scale(10),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  innerView: {
    paddingLeft: Scale(15)
  },
  innerButton: {
    paddingVertical: Scale(10)
  },
  textStyle: {
    color: '#000',
    fontSize: Scale(15),
    fontWeight: '500'
  },
  textStyle2: {
    color: '#000',
    fontSize: Scale(14),
  },
});