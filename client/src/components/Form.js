import React, { useState,useEffect } from 'react';
import './Form.css'
import axios from "axios" 
var fileDownload = require('js-file-download');


function Form(props) 
{



  function createDownloadLink(href)
  {
  const downloadbutton=document.createElement("a")
  downloadbutton.setAttribute("id","btn")
  var filename=href.substr(40, href.length)
  downloadbutton.setAttribute("onclick",getDownload(filename))
  const downloadbuttonText=document.createElement("span")
  downloadbuttonText.setAttribute("class","noselect")
  downloadbuttonText.innerHTML="Download"
  const downloadbuttonDiv=document.createElement("div")
  downloadbuttonDiv.setAttribute("id","circle")
  downloadbutton.appendChild(downloadbuttonText);
  downloadbutton.appendChild(downloadbuttonDiv);
  var element=document.querySelector("#downlodLink")
  element.insertBefore(downloadbutton, element.firstChild);
  }

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
    var downloadfile=filename.substr(40, filename.length)
    axios.get('http://localhost:5000/download/song/'+downloadfile, {
      responseType: 'blob',
    })
    .then(response=>{
      fileDownload(response.data, downloadfile+'.mp3');
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

//function clearpage()
//{
//    const myNode = document.getElementById("request");
//    myNode.innerHTML = '';
//}
//function load()
//{
//  var musicID = document.querySelector("#name").value;
//  const load = document.createElement('img');
//  
//  clearpage()
//  load.src = loading;
//  var w = document.querySelector("#loading");
//  load.style.width='30%';
//  w.insertBefore(load, w.childNodes[0]);
//  musicID=musicID.substring(31, 53);
//  const music = document.createElement('iframe');
//  music.src='https://open.spotify.com/embed/track/' + musicID ;
//  music.style.height='380px';
//  music.style.width='300px';
//  music.id='ParentOne';
//  music.setAttribute('frameborder','0');
//  music.setAttribute('allowtransparency','true');
//  music.setAttribute('allow','encrypted-media');
//  var w = document.querySelector("#root > div > div");
//  w.insertBefore(music, w.childNodes[1]);
//}

//class Form extends React.Component
//{
//  constructor(props)
//  {
//    super(props)
//    //console.log(props.ongetMusicID)
//    this.state=props.ongetMusicID
//    console.log(this.state)
//    function getMusicID(event)
//    {
//      event.preventDefault();
//      var MusicID=document.querySelector("#name").value
//      MusicID = MusicID.substring(31, 53);
//      console.log(MusicID)
//      //props.ongetMusicID(MusicID)
//    }
//    
//  }
//  render(){ 
//    return(
//      <form className="form form__group field">
//        <input type="input" className="form__field"  placeholder="https://open.spotify.com/track/xxxxxxxxxxxxx" name="name" id='name' required />
//        <label for="name" className="form__label">Spotify Link</label>
//        <div onClick={this.getMusicID} id="btn"><span className="noselect">Convert</span><div id="circle"></div></div>
//      </form>
//    )
//  }
//
//}
