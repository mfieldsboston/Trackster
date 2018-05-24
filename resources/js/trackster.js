$(document).ready(function() {
  $("#search-button").click(function(){
    Trackster.searchTracksByTitle($("#search-input").val());
    console.log($("#search-input").val(), 'it works');
    /*$.ajax({
          url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=0069be8fe5748bc12374628cbb0a0055&format=json",
          type: 'GET',
          dataType: 'json',
          success: function(results) {
            console.log(results);
            },
          error: function(req, status, err) {
              console.log(req, status, err, 'something went wrong');
            }
        });*/
    });
});

var Trackster = {};
const API_KEY = '0069be8fe5748bc12374628cbb0a0055';

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
        /*url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=0069be8fe5748bc12374628cbb0a0055&format=json",*/
        url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
        type: 'GET',
        // Expect `json` back from server
        dataType: 'json',
        success: function(data) {
          //console.log(typeof this.type, this.type, data, title);
          console.log(data);
          },
        error: function(req, status, err) {
            console.log(req, status, err, 'something went wrong');
          }
      });
};
