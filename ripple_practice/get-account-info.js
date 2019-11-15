/* we will need this code at some point to find out if users have enough XRP
in their account (admitedly with some changes)


The output we'd be interested in for this situation is contained within the info 
variable and is called  'xrpBalance' */


'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server
});
api.connect().then(() => {
  /* This is the code that gets the info about the address inputed below */
  const myAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';

  console.log('getting account info for', myAddress);
  return api.getAccountInfo(myAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');

  /* This is just cleanup for the above code */
}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
}).catch(console.error);