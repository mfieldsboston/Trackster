var Trackster = {};
const API_KEY = '0069be8fe5748bc12374628cbb0a0055';

$(document).ready(function() {
  $("#search-button").click(function(){
    Trackster.searchTracksByTitle($("#search-input").val());
    //console.log($("#search-input").val(), 'it works');
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

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

  var $songList = $('#song-list');

  $songList.empty();

  for (i = 0; i < tracks.length; i++) {
      console.log(tracks[i], 'OUTPUT of renderTracks');
      var mediumAlbumArt = tracks[i].image[1]["#text"];

      var htmlTrackRow =
        '<div class="row song_info">' +
          '<a href="'+ tracks[i].url + '" target="_blank">' +
            '<i class="fa fa-play-circle-o col-xs-1 col-xs-offset-1" id="play-button"></i>' +
          '</a>' +
          '<p class="col-xs-3">' + tracks[i].name + '</p>' +
          '<p class="col-xs-3">' + tracks[i].artist + '</p>' +
          '<p class="col-xs-2"><img src="' + mediumAlbumArt + '"/></p>' +
          '<p class="col-xs-1">' + tracks[i].listeners + '</p>' +
        '</div>';

        $("#song-list").append(htmlTrackRow);
    }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
        /*url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=0069be8fe5748bc12374628cbb0a0055&format=json",*/
        url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + "&api_key=" + API_KEY + "&format=json",
        type: 'GET',
        // Expect `json` back from server
        dataType: 'json',
        success: function(data) {
          var tracks = data.results.trackmatches.track;
          //console.log(typeof this.type, this.type, data, title);
          //console.log(data.results.trackmatches.track[i]);
          //console.log(tracks, 'OUTPUT of searchTracksByTitle');
          //Trackster.renderTracks(data.results.trackmatches.track);
          Trackster.renderTracks(tracks);
          //return data.results.trackmatches.track;
          /*for (i = 0; i < tracks.length; i++) {
              console.log(tracks[i], 'WOW');
            }*/
          },
        error: function(req, status, err) {
            console.log(req, status, err, 'something went wrong');
          }
      });
};
