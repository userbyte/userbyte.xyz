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

function refreshImage(imgElement, imgURL) {
  // create a new timestamp
  var timestamp = new Date().getTime();
  var el = document.getElementById(imgElement);
  var queryString = "&t=" + timestamp;
  el.src = imgURL + queryString;
}

function updateDiscordLanyardThing() {
  // console.log('updating discord lanyard');
  discordProfileCard_theme = 'dark';
  discordProfileCard_bgColor = '151515';
  discordProfileCard_animatedPfp = 'false'; // if discord pfp is animated, set this to true
  discordProfileCard_hideDiscrim = 'true';
  discordProfileCard_borderRadius = '0px';
  discordProfileCard_idleMsg = encodeURI('prolly touching grass or sum, idk'); // what should it say when i have no activity showing on discord
  refreshImage('lanyard-discord', `https://lanyard.cnrad.dev/api/143183268571774976?theme=${discordProfileCard_theme}&bg=${discordProfileCard_bgColor}&animated=${discordProfileCard_animatedPfp}&hideDiscrim=${discordProfileCard_hideDiscrim}&borderRadius=${discordProfileCard_borderRadius}&idleMessage=${discordProfileCard_idleMsg}`);
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

allwindows = [];

function fillAllWindowsArray() {
  // get all elements with "window" class and add their IDs to allwindows array
  l = document.querySelectorAll('.window');
  l.forEach(function(item){
    allwindows.push(item.id);
  });
}

function arrexclude(arr, excluded) {
  clone = [...arr];
  clone.splice(clone.indexOf(excluded), 1);
  return clone;
}

function setFocusedWindow(e) {
  console.log(`setting focused window: ${e.id}`);
  e.style.zIndex = 1;
  otherwindows = arrexclude(allwindows, e.id);
  // console.log(`otherwindows: ${otherwindows}`);
  for (w in otherwindows) {
    // console.log(`setting unfocused window: ${otherwindows[w]}`);
    document.getElementById(otherwindows[w]).style.zIndex = 0;
  }
}

function randomizeWindowPositions() {
  // maxwidth = window.screen.availWidth;
  // maxheight = window.screen.availHeight;
  // // apply "padding" to try stopping windows from going off-screen
  // padding = 650;
  // maxwidth -= padding;
  // maxheight -= padding;
  // ^ removed in favor of just using vw and vh units instead of px
  for (w in allwindows) {
    console.log(`setting random window pos: ${allwindows[w]}`);
    // rand_left = Math.floor(Math.random() * maxwidth);
    // rand_top = Math.floor(Math.random() * maxheight);
    rand_top = Math.floor(Math.random() * 75);
    rand_left = Math.floor(Math.random() * 75);
    document.getElementById(allwindows[w]).style.top = `${rand_top}vh`;
    document.getElementById(allwindows[w]).style.left = `${rand_left}vw`;
  }
}

function resetWindowPositions() {
  document.getElementById('links').style.top = '42vh';
  document.getElementById('discordpresence').style.top = '42vh';
  document.getElementById('spotify').style.top = '42vh';
  document.getElementById('ubterm').style.top = '2vh';
  document.getElementById('ubterm').style.left = 'unset';
  document.getElementById('ubterm').style.right = '2vw';
  centerLinksWindow();
  positionOtherWindowsAroundABaseWindowBecauseICantFuckingGetThemToPositionNormallyBecauseCSSPositioningIsInconsistentAndIDontWantToLearnCSSGridOrFlexBoxBecauseItLooksHard();
}

/* ion know how this shit works but it does: https://dev.to/shantanu_jana/how-to-create-a-draggable-div-in-javascript-iff */
const makeDraggable = (element, dragzone) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  //MouseUp occurs when the user releases the mouse button
  const dragMouseUp = () => {
    document.onmouseup = null;
    //onmousemove attribute fires when the pointer is moving while it is over an element.
    document.onmousemove = null;
    element.classList.remove("drag");
  };

  const dragMouseMove = (event) => {
    event.preventDefault();
  
    //clientX property returns the horizontal coordinate of the mouse pointer
    pos1 = pos3 - event.clientX;

    //clientY property returns the vertical coordinate of the mouse pointer
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;

    //offsetTop property returns the top position relative to the parent
    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  };

  const dragMouseDown = (event) => {
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    element.classList.add("drag");
    setFocusedWindow(element);

    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  dragzone.onmousedown = dragMouseDown;
};

function getOffset(el) {
  // get left and top offsets of an element, effectively its position
  // stolen from: https://www.delftstack.com/howto/javascript/get-position-of-element-in-javascript/
  var _x = 0;
  var _y = 0;
  while (el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop )) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function centerLinksWindow() {
  el = document.getElementById("links")
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
}

function positionOtherWindowsAroundABaseWindowBecauseICantFuckingGetThemToPositionNormallyBecauseCSSPositioningIsInconsistentAndIDontWantToLearnCSSGridOrFlexBoxBecauseItLooksHard() {
  // get x and y of discord window in px
  basewindow = document.getElementById('links');
  var x = getOffset( basewindow ).left;
  var y = getOffset( basewindow ).top;
  console.log(`base window (${basewindow.id}) - x ${x} | y ${y}`);
  // set positions of other windows based off basewindow
  aboutmewindow = document.getElementById('aboutme');
  // aboutmewindow_x = '50%';
  // aboutmewindow_y = y-320;
  // aboutmewindow.style.left = `${aboutmewindow_x}`;
  // aboutmewindow.style.transform = `translateX(-50%)`; // just use da normal centering method for the about me window, no need for anything fancy here
  // aboutmewindow.style.top = `${aboutmewindow_y}px`;
  aboutmewindow_x = x-610;
  aboutmewindow_y = y-320;
  aboutmewindow.style.left = `${aboutmewindow_x}px`;
  aboutmewindow.style.top = `${aboutmewindow_y}px`;

  ubtermwindow = document.getElementById('ubterm');
  ubtermwindow_x = x+65;
  ubtermwindow_y = y-310;
  ubtermwindow.style.left = `${ubtermwindow_x}px`;
  ubtermwindow.style.top = `${ubtermwindow_y}px`;

  spotifywindow = document.getElementById('spotify');
  spotifywindow_x = x+220;
  spotifywindow.style.left = `${spotifywindow_x}px`;

  discordwindow = document.getElementById('discordpresence');
  discordwindow_x = x-620;
  discordwindow.style.left = `${discordwindow_x}px`;
}

var lastForcedShitUpdate = new Date().getTime();
document.addEventListener('keypress', function(e) {
  if (e.key === 'r') {
    now = new Date().getTime();
    // limit force updates to once every 5 seconds so you cant (easily) spam the apis
    if (now > ( lastForcedShitUpdate + (5*1000) )) {
      console.log('forceShitUpdate');
      // reset thing
      lastForcedShitUpdate = new Date().getTime();
      // call update functions
      getDiscordShit();
      updateDiscordLanyardThing();
    }
  }
});

window.onload = function onLoaded() {
  fillAllWindowsArray();
  updateShit();
  centerLinksWindow();
  positionOtherWindowsAroundABaseWindowBecauseICantFuckingGetThemToPositionNormallyBecauseCSSPositioningIsInconsistentAndIDontWantToLearnCSSGridOrFlexBoxBecauseItLooksHard();
  
  // {"draggable-element-id":"dragzone-id"}
  tobedraggable = {
    "aboutme":"titlebar-aboutme",
    "links":"titlebar-links",
    "discordpresence":"titlebar-discordpresence",
    "spotify":"titlebar-spotify",
    "ubterm":"titlebar-ubterm"
  }
  for (i in tobedraggable) {
    makeDraggable(document.getElementById(i), document.getElementById(tobedraggable[i]));
  }
  updateSpotifySongProgress();

  document.getElementById("term-input").addEventListener("keyup", event => {
    if (event.key !== "Enter") return;
    if (document.getElementById('term-input').value === '') return;
    console.log(`term input received: ${document.getElementById('term-input').value}`);
    //handleTerminalInput(document.getElementById('term-input').value)
    document.getElementById('term-input').value = '';
  });
}