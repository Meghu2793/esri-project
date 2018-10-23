const express = require('express')
// const next = require('next')
const cors = require('cors');
const Twit = require('twit')
const config1 = require('./config/config')
const port = process.env.port || 5000;
const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
//   .then(() => {
    const server = express()
    server.use(cors());

    var T = new Twit(config1);

    var params = {
      q: "@Esri",
      count: 5
    };

    server.get('/tweets', (req, res) => {
      // console.log("Coming");
      var twits = [];
      T.get("search/tweets", params, function (err, data, res1) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
          var myObj = new Object();
          myObj.created_at = tweets[i].created_at;
          myObj.text = tweets[i].text;
          myObj.userid = tweets[i].user.screen_name;
          myObj.name = tweets[i].user.name;
          myObj.desc = tweets[i].user.description;
          twits.push(myObj);
        }
        // console.log(twits);
        res.send(twits);
      });
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  // });
