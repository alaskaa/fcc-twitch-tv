$(document).ready(function() {
  for(var i=0; i < users.length; i++) {
    let url = 'https://wind-bow.gomix.me/twitch-api/users/' + users[i] + '?callback=?';
    let twitch_url = 'https://www.twitch.tv/' + users[i];
    $.getJSON(url, function(data) {
      console.log(data);
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + data._id + '?callback=?', function(datatwo) {
        if(datatwo.stream === null) {
          $('#printy').append('<img src="' + data.logo + '"/>' + " " + '<a href="' + twitch_url + '" target="_blank">' + data.display_name + ' </a>' + data._id + " Offline" + '<br>');
        } else {
          $('#printy').append(data.display_name + " " + data._id + " Online" + '<br>');
        }
      });
    });
  }
});



const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
