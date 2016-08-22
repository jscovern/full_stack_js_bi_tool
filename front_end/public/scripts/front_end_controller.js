angular.module('Business_Intelligence', ['ngRoute']);
angular.module('Business_Intelligence')
  .controller('CreateChartController', CreateChartController)
  .config(function($routeProvider,$locationProvider){
    // $routeProvider
    // .when('/', {
    //   templateUrl: "/templates/newChart.html",
    //   controller: "CreateChartController"
    // });
    // .when('/api/:id', {
    //   templateUrl: "/templates/card_show.html",
    //   controller: "CardShowController"
    // });
  })
.run(function($rootScope, $templateCache) {
  console.log('in here'+$templateCache);
      $templateCache.removeAll();
});

  CreateChartController.$inject = ["$http","$scope"];

function CreateChartController($http,$scope){

  // $scope.getCards = getCards;
  $scope.newChart = {displayCategories: false};
  $scope.startCategoryCreation = startCategoryCreation;
  console.log($scope.newChart);

  function startCategoryCreation() {
    console.log($scope.newChart);
    window.location.assign("/categoryCreate");
  }

  // function createInputs() {
    // $http.get('/api')
      // .then(function(response) {
        // $scope.questionsList=response.data.cards;
      // });
  // }
  // getCards();
}