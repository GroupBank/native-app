import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width * (4 / 5);

const styles = EStyleSheet.create({
  circle: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  body: {
    color: 'white',
    fontSize: 60,
  },
});

export default styles;
