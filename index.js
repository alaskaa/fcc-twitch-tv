$(document).ready(function(e) {
  e.preventDefault();
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/summary', function(data) {
    console.log(data);
  });
});
