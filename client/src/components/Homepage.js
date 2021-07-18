import './Homepage.css'
import Header from './Header.js';
import Instructions from './Instructions.js';
import Form from './Form.js';
import SpotifyPlayer from './SpotifyPlayer.js';
import { useState } from 'react';


function Homepage() {
  var [musicIDg,setMusicIDg]=useState("")

  function getMusicID(musicIDval)
    {
      setMusicIDg(musicIDval)
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
