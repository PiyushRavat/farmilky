import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Scale } from '../../lib/lib';
import { Colors } from '../../../src/Theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AppBackgroundColor
  },
  lableView: {
    padding: Scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeLable: {
    fontSize: Scale(20),
    color: '#000',
    textAlign: 'center'
  },
  typeThough: {
    fontSize: Scale(17),
    color: '#000',
    textAlign: 'center'
  },
  slideView: {
    padding: Scale(10),
  },
  sliderLayout: {
    padding: Scale(15),
    backgroundColor: '#fff',
    borderRadius: Scale(10)
  },
  carouselStyle: {
    marginTop: Scale(10)
  },
  drImg: {
    height: width / 1.25,
    width: '100%',
    alignSelf: 'center'
  },
  drName: {
    color: '#000',
    fontSize: Scale(20),
    fontWeight: 'bold',
    paddingVertical: Scale(10)
  },
  drType: {
    color: '#808080',
    fontSize: Scale(13),
    fontWeight: '600',
    paddingBottom: Scale(3)
  },
  drExp: {
    color: '#000',
    fontSize: Scale(15),
    fontWeight: '400',
    paddingBottom: Scale(3)
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Scale(15),
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalReview: {
    color: '#000',
    fontSize: Scale(18),
    paddingBottom: Scale(3)
  },
  primeText: {
    color: '#00a2b6',
    fontSize: Scale(20),
    fontWeight: '600',
  },
  bookAppointmentBtn: {
    borderWidth: 2,
    borderColor: '#ffa233',
    width: width / 2,
    minHeight: Scale(30),
    borderRadius: Scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Scale(20)
  },
  bookAppointmentBtnText: {
    color: '#ffa233',
    fontSize: Scale(17),
    fontWeight: '600',
  },
  nextPrevBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingRight: Scale(5)
  },
  prevNextBtn: {
    height: Scale(40),
    width: Scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Saffron,
    marginRight: Scale(10)
  },
  sliderLayout2: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    overflow: 'hidden',
    paddingBottom: Scale(10)
  },
  morePackagesBtn: {
    width: width / 1.9,
    height: Scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Saffron,
    alignSelf: 'center',
    borderRadius: Scale(25),
  },
  morePackagesBtnText: {
    color: Colors.White,
    fontSize: Scale(17),
    fontWeight: '700',
    textAlign: 'center'
  },
  serviceContainer: {
    padding: Scale(10)
  },
  serviceImg: {
    height: Scale(100),
    width: Scale(100),
    alignSelf: 'center'
  },
  serviceName: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: Scale(20)
  },
  detailsContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.PlaceholderColor,
    paddingTop: Scale(10),
    paddingRight: Scale(10),
    alignItems: 'flex-end'
  },
  detailText: {
    color: Colors.PlaceholderColor,
    fontSize: Scale(10),
    fontWeight: '500',
    textAlign: 'center'
  },
  searchContainer: {
    backgroundColor: Colors.AuthPageBgColor,
  },
  lableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: Scale(10),
    paddingHorizontal: Scale(10),
  },
  topLable: {
    color: '#fff',
    fontSize: Scale(15),
    fontWeight: '600'
  },
  searchBoxContainer: {
    borderWidth: 2,
    borderColor: Colors.inputContainerBorder,
    borderStyle: 'solid',
    width: '85%',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: Scale(45),
    padding: Scale(3)
  },
  searchLocationView: {
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '100%'
  },
  inputStyle: {
    width: '85%',
    color: Colors.Black,
    fontSize: Scale(15),
    fontWeight: '500',
    paddingLeft: '5%'
  },
  searchTypeStyle: (isSelected = false) => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isSelected ? Colors.selectedSearchType : 'rgba(0,0,0,0.3)',
      padding: Scale(7),
      minWidth: Scale(80),
      borderRadius: Scale(3),
      marginLeft: Scale(5),
      marginBottom: Scale(5)
    }
  },
  searchTypeText: {
    color: Colors.White,
    fontSize: Scale(14),
    fontWeight: '500'
  },
  tabStyle: (isLast = false) => {
    return {
      width: Scale(150),
      height: Scale(60),
      borderTopWidth: StyleSheet.hairlineWidth,
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderRightWidth: isLast ? StyleSheet.hairlineWidth : 0,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.White,
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  tabName: {
    color: Colors.White,
    fontSize: Scale(14),
    fontWeight: '500',
    marginTop: Scale(3)
  },
  content: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  image: { width: 100, height: 100, borderRadius: 50 }
});