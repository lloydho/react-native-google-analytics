var React = require('react-native');
var AdSupportIOS = React.AdSupportIOS;
var Dimensions = React.Dimensions;

module.exports = {
  getClientId(cb) {
    AdSupportIOS.getAdvertisingId(function(advertisingId) {
      cb(null, advertisingId);
    }, cb);
  },
  device: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
};
