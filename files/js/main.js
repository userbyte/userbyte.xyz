sp = undefined;

function getDiscordShit() {
  fetch('https://api.lanyard.rest/v1/users/143183268571774976', {method: 'GET'})
  .then(response => response)
  .then((response) => response.json().then(res => ({status: response.status, json: res})))
  .then(response => {
    if (response.status === 200) {
      resp_json = response.json;
      // console.log('lanyard shit 200');
      if (resp_json['data']['listening_to_spotify']) {
        // console.log('userbyte is listening to spotify');
        // console.log('updating spotify lanyard');
        sp = resp_json['data']['spotify'];
        ct = (((new Date().getTime() - sp.timestamps.start) / (sp.timestamps.end - sp.timestamps.start)) * 100);
        setSpotifyProgBar(ct);
        document.getElementById("spotify-songLink").setAttribute('href', `https://open.spotify.com/track/${sp['track_id']}`);
        document.getElementById("spotify-albumArt").setAttribute('src', sp['album_art_url']);
        document.getElementById("spotify-artistName").textContent = sp['artist'];
        document.getElementById("spotify-songName").textContent = sp['song'];
        document.getElementById("spotify-albumName").textContent = sp['album'];
        // set tooltip texts
        document.getElementById("spotify-artistName").setAttribute('title', sp['artist']);
        document.getElementById("spotify-songName").setAttribute('title', sp['song']);
        document.getElementById("spotify-albumName").setAttribute('title', sp['album']);
      } else {
        // console.log('userbyte is not listening to spotify');
        sp = undefined;
        if (document.getElementById("spotify-songLink").hasAttribute('href')) {
          // remove the song link if one is set
          document.getElementById("spotify-songLink").removeAttribute('href');
        }
        document.getElementById("spotify-albumArt").setAttribute('src', 'files/img/questionmark.png');
        document.getElementById("spotify-artistName").textContent = '---------';
        document.getElementById("spotify-songName").textContent = '(nothing)';
        document.getElementById("spotify-albumName").textContent = '---------';
        // set tooltip texts
        document.getElementById("spotify-artistName").setAttribute('title', '');
        document.getElementById("spotify-songName").setAttribute('title', '');
        document.getElementById("spotify-albumName").setAttribute('title', '');
      }

      // removed in favor of using https://github.com/cnrad/lanyard-profile-readme
      // if i decide i want it to be consistently themed, ill use this code so imma keep it just incase
      // if (resp_json['data']['activities'].length > 0) {
      //   console.log('there is at least 1 activity')
      //   activity0 = resp_json['data']['activities'][0];
      //   if (activity0.name === 'Spotify') {
      //     // try to get next activity
      //     activity0 = resp_json['data']['activities'][1];
      //   }
      //   document.getElementById("presence-name").textContent = activity0.name;
      //   document.getElementById("presence-details").textContent = activity0.details;
      //   document.getElementById("presence-state").textContent = activity0.state;
      //   console.log()
      // } else {
      //   // user has no activies
      //   document.getElementById("presence-name").textContent = 'nothing';
      //   document.getElementById("presence-details").textContent = '';
      //   document.getElementById("presence-state").textContent = '';
      // }
    } else if (response.status === 500) {
      // console.log('lanyard shit 500');
    }
  })
  .catch((e) => {
    console.log(e);
  });
}

function refreshImage(imgElement, imgURL){    
  // create a new timestamp 
  var timestamp = new Date().getTime();  
  var el = document.getElementById(imgElement);  
  var queryString = "?t=" + timestamp;    
  el.src = imgURL + queryString;    
}

function updateDiscordLanyardThing() {
  // console.log('updating discord lanyard');
  refreshImage('lanyard-discord', 'https://lanyard.cnrad.dev/api/143183268571774976');
}

function updateShit() {
  // interval seconds (how often to update the shit)
  seconds = 30;
  itv = seconds * 1000;
  getDiscordShit();
  updateDiscordLanyardThing();
  setTimeout(updateShit, itv);
}

function setSpotifyProgBar(n) {
  document.getElementById('spotify-progbar-bar').style.width = `${n}%`;
}

function updateSpotifySongProgress() {
  // interval seconds (how often to update the shit)
  seconds = 1;
  itv = seconds * 1000;
  if (sp != undefined) {
    ct = (((new Date().getTime() - sp.timestamps.start) / (sp.timestamps.end - sp.timestamps.start)) * 100);
    if (ct <= 100) {
      setSpotifyProgBar(ct);
    }
  } else {
    setSpotifyProgBar(0);
  }
  setTimeout(updateSpotifySongProgress, itv);
}

window.onload = function onLoaded() {
  updateShit();
  updateSpotifySongProgress();
}