import React from "react";
import loading from "./load.gif"
function SpotifyPlayer(props)
{   
    if(props.musicIDs!="")
        {
        var spotifyelement=<div className="result">
            <div id="downlodLink" ></div>

            {
                React.createElement
                    (
                          'img',
                            {
                                src : loading,
                                style: {width: "55%",    transform: "translate(41%, 0%)"}
                            },
                            null
                    ) 
            }
                <br></br>
            {
                React.createElement
                    (
                          'iframe',
                            {
                                src : 'https://open.spotify.com/embed/track/'+props.musicIDs,
                                id :'ParentOne',
                                frameborder:'0',
                                allowtransparency:'true',
                                allow:'encrypted-media',
                                style:{height: "380px" , width: "300px"}
                            },
                            null
                    )
            } 
             </div>
            const myNode = document.getElementById("request");
            myNode.innerHTML = '';        
        }
    else
        {
            spotifyelement=null
        }

    return spotifyelement
    //<iframe src={'https://open.spotify.com/embed/track/'+props.musicIDs}  id="ParentOne" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{height: "380px" , width: "300px",transform:"translate(30%,0%)"}}></iframe>
}

export default SpotifyPlayer;