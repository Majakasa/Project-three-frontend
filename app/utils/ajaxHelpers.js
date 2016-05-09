var axios = require('axios');

const ajaxHelpers = {
  getCharacters: function(data) {
    return axios.get('https://gentle-fjord-48294.herokuapp.com ' + '/characters')
    .then(function (response) {
      console.log("response:", response.data);
        data(response.data);

    })
  },
  findCharacter: function(id) {
    return axios.get('https://gentle-fjord-48294.herokuapp.com' + '/characters/' + id)

  },
  addCharacter: function(newCharacter){
    return axios.post('https://gentle-fjord-48294.herokuapp.com/', newCharacter);
  },
  deleteCharacter: function(name){
     axios.delete('https://gentle-fjord-48294.herokuapp.com' + '/characters/' + name)

  }




};
export default ajaxHelpers
