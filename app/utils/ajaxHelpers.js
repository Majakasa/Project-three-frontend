var axios = require('axios');

const ajaxHelpers = {
  getCharacters: function(data) {
    return axios.get('http://localhost:3000' + '/characters')
    .then(function (response) {
      console.log("response:", response.data);
        data(response.data);

    })
  },
  findCharacter: function(id) {
    return axios.get('http://localhost:3000' + '/characters/' + id)

  },
  addCharacter: function(newCharacter){
    return axios.post('http://localhost:3000/characters/', newCharacter);
  },
  deleteCharacter: function(name){
     axios.delete('http://localhost:3000' + '/characters/' + name)

  }




};
export default ajaxHelpers
