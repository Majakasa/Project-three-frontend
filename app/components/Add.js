import React from 'react';

function Add(props){
  return (
    <div className="AddPlaylist container">
      <p>Add playlist</p>
      <form onSubmit={props.onSubmitList}>
        <input onChange={props.onChangeName} placeholder='Name' type='text' />
        <input onChange={props.onChangeGender} placeholder='gender' type='text' /><br/>
        <input onChange={props.onChangeCreator} placeholder='Creator' type='text' /><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.listAddedMsg}</h4>
    </div>
  );
}

export default Add;
