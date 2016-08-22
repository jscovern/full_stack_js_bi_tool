angular.module('Business_Intelligence', ['ngRoute']);
angular.module('Business_Intelligence')
  .controller('CreateChartController', CreateChartController)
  .config(function($routeProvider,$locationProvider){
    // $routeProvider
    // .when('/api', {
    //   templateUrl: "/templates/card_index.html",
    //   controller: "CardsController"
    // })
    // .when('/api/:id', {
    //   templateUrl: "/templates/card_show.html",
    //   controller: "CardShowController"
    // });
  });
  CreateChartController.$inject = ["$http","$scope"];


function CreateChartController($http,$scope){

  $scope.getCards = getCards;
  $scope.newChart = {};

  function createInputs() {
    $http.get('/api')
      .then(function(response) {
        $scope.questionsList=response.data.cards;
      });
  }
  getCards();
}