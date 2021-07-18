const express = require('express')
const cors = require('cors')
const app=express();
const { exec } = require("child_process");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/download/song/:song', function (req, res) 
{
    var d_song ="./downloads/" + req.params.song
    console.log(d_song)
    fs.readFile(d_song, function(err, content) 
    {
        if (err) 
        {
          res.writeHead(404, { "Content-type": "text/html" });
          res.end("<h1>No such file</h1>");
        } else 
        {
          res.writeHead(200, { "Content-type": "audio/mpeg" });
          res.end(content);
        }
      });

});

app.post('/api', function (req, res) 
{
    var x
    x=req.body.spotLink
  
    exec("python dl.py "+x, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        text=stdout
        text=text.split(/\r?\n/)
        text=text[text.length-3]
        text=text.substr(69,text.length-1)
        console.log(text)
        res.send(text)
    });
})

app.listen(5000,()=>console.log("listenning"))