import React, {useState} from 'react';
import './Form.css'
import axios from "axios" 
var fileDownload = require('js-file-download');

function Form(props) 
{
  const [spotLink, setSpotLink]=useState("")
  const submitSpotLink = () =>
  {
    axios.post('http://localhost:5000/api', {
      spotLink:spotLink
    }).then(function (response) {
      console.log(response.data)
      getDownload(response.data)
  })
  }
  function getDownload(filename) {
    axios.get('http://localhost:5000/download/song/'+filename, {
      responseType: 'blob',
    })
    .then(response=>{
      fileDownload(response.data, filename+'.mp3');
    })
  }

  function getMusicID(event)
  {
    submitSpotLink()
    event.preventDefault();
    var MusicID=document.querySelector("#spotLink").value
    MusicID =MusicID.substring(31, 53);
    props.ongetMusicID(MusicID)
  }
  return (
      <div className="form form__group field">
          <input type="text" className="form__field"  placeholder="https://open.spotify.com/track/xxxxxxxxxxxxx" name="spotLink" id='spotLink'  onChange={(e)=>{setSpotLink(e.target.value)}} />
          <label for="name" className="form__label">Spotify Link</label>
          <button onClick={getMusicID} id="btn"><span className="noselect">Convert</span><div id="circle"></div></button>
      </div>
  );
}

export default Form;
