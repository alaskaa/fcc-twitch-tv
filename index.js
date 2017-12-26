$(document).ready(function() {
  for(var i=0; i < users.length; i++) {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[i] + '?callback=?', function(data) {
      console.log(data);
    });
  }
});

//streams/summary

const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
