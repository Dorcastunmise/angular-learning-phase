(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    function DIController ($scope, $filter, $injector) { 
 //filter service lets one create filtering functions used for formatting data that eventually gets displayed to the user
      $scope.name = "Yaakov";

      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };

      console.log($injector.annotate(DIController));
}
    

function AnnotateMe(name, job, blah) {
    return "Blah!";
}

console.log(DIController.toString());

})();