(function (){
'use strict';

angular.module('myFirstApp', []) /*(the application, dependency in form of an array the application needs)  */
//note: module function returns module instance

.controller('MyFirstController', function ($scope) {
    $scope.name = "Yaakov";
    $scope.sayHello = function () {
       return "How have you been? ";
    };
    $scope.plantState = function () {
       return "text me";
    };
});
//to define view model of view (i.e index.html). It takes name of the viewmodel/controller's name and function defining the functionality of the controller


})(); //to ensure no local variable bleeds into the global scope