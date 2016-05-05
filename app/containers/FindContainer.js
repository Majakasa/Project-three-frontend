findContactAjaxCall: function() {
    console.log('Find this contact:', this.state.name);
    
    const contact = {
      name: this.state.name,
    };
    ajaxHelpers.findContact(contact)
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },
