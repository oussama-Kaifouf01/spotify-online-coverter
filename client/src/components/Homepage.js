import './Homepage.css'
import Header from './Header.js';
import Instructions from './Instructions.js';
import Form from './Form.js';
import SpotifyPlayer from './SpotifyPlayer.js';
import { useState } from 'react';


function Homepage() {
  //var musicIDg=;
  var [musicIDg,setMusicIDg]=useState("")

  function getMusicID(musicIDval)
    {
      setMusicIDg(musicIDval)
      //musicIDg=musicIDval;
      //console.log(musicIDg);
    }
  return (
    <div>
      <Header />
      <div id="homepage" className="homepage">  
        <div id="spotifyPlayer" >
          <SpotifyPlayer musicIDs={musicIDg} />
        </div>
        <div id="request" >
            <Instructions />
            <Form ongetMusicID={getMusicID}/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
