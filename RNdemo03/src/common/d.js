import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 720;

/**
 * @return {number}
 */
function D(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx;
}

export default D;
