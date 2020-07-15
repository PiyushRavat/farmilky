import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 350;

const Scale = size => width / guidelineBaseWidth * size;

export { Scale };