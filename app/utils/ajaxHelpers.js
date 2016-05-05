var axios = require('axios');

module.exports = {
  url: 'http://localhost:3000',

  getCharacters: function(afterAjaxFxn) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;
    axios.get(this.url + '/characters', {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    .then(function (response) {
      console.log("response:", response.data);
      if (afterAjaxFxn) {
        afterAjaxFxn(response.data);
      }
    })
    .catch(function (response) {
      console.log('There was an error', response);
      afterAjaxFxn();
    });
  },
  findCharacter: function(name) {
    return axios.get(this.url + 'characters/' + name);
  },
};













// callback example

// getSomethingAndRunCB(function(someData) {
//   console.log(someData);
//   console.log('I was called')
// });
//
// function getSomethingAndRunCB(callback) {
//   // do something that takes a while
//   // do some other things
//   // here i got some data
//   var data = 'some data';
//   // run a callback
//   callback(data);
// }
