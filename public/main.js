

const BASE_URL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=793e56bbeef647bad01344ad6713671e&format=json"

angular
  .module("lastfmApp", [])
  .controller("mainController", ["$scope", "$http",($scope, $http) => {

    $http({
      method: "GET",
      url: BASE_URL,
    }).then(response =>{
      console.log(response.data);
      $scope.artists = response.data.artists.artist;
    })
  }])
