var ids;
const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < users.length; i++) {
  loadApi();
}


function loadApi () {
        $.ajax({
            url: "https://wind-bow.gomix.me/twitch-api/streams/" + users[i] + "?callback=?",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function(data) {
                ids = data._id;
                console.log(data);
                getStatus(data);
            }
        });
}

function getStatus(data) {

  if (data.stream === null) {
    console.log("Streamer offline");
    user_name = data._links.channel.substring(38);
    getOfflineUsers();

  }
  else {
    if(data.stream.channel.logo !== null) {
      let url = (data.stream.channel.logo);
      let twitch_url = "https://www.twitch.tv/" + data._links.channel.substring(38);
      $('#printy').append('<div class="card"><img src="' + url + '"/>' + " " + '<a href="' + twitch_url + '" target="_blank">' + data._links.channel.substring(38) + ' </a>' + "is currently playing " + data.stream.game + '</div><br><br>');
    }
    else {
      console.log("Error");
    }
  }
}

function getOfflineUsers() {

  $.ajax({
      url: "https://wind-bow.gomix.me/twitch-api/users/" + user_name + "?callback=?",
      dataType: "jsonp",
      data: {
          format: "json"
      },
      success: function(data) {
          console.log(data);
          let twitch_url = "https://www.twitch.tv/" + data.display_name;
          $('#printy').append('<div class="card"><img src="' + data.logo + '"/>' + " " + '<a href="' + twitch_url + '" target="_blank">' + data.display_name + ' </a>' + " is currently Offline " + '</div><br><br>');
      }
  });
}
