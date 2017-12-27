var ids;
const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < users.length; i++) {
  loadApi();
}


function loadApi () {
  let twitch_url = 'https://www.twitch.tv/' + users[i];
        $.ajax({
            url: "https://wind-bow.gomix.me/twitch-api/channels/" + users[i] + "?callback=?",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function(data) {
                $('#printy').append('<img src="' + data.logo + '"/>' + " " + '<a href="' + twitch_url + '" target="_blank">' + data.display_name + ' </a>' + data._id + '<br> <br>'),
                ids = data._id;
                console.log(data);
                getStatus()
            }
        });
}

function getStatus() {

  $.ajax({
      url: "https://wind-bow.gomix.me/twitch-api/streams/" +  + "?callback=?",
      dataType: "jsonp",
      data: {
          format: "json"
      },
      success: function(data) {
        //console.log(ids);
        if(data.stream === null) {
          $('#printytwo').append(ids + " Offline" + '<br> <br>');
        }
        else {
          $('#printytwo').append(ids);
        }
      },
      error: function () {
          console.log("unable to access json");
      }
  });
}
