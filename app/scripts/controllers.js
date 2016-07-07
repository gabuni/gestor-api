(function () {
  'use strict';




  /***************************************************************/
  angular
    .module('gestor.controllers', [])
    .controller('ImgCtrl',  ImgCtrl);
    // el module y controller aparecen definidos en en archivo app.js
    // function ImgCtrl ($scope){
       $scope.subir= {};
       $scope.btnSubir= function (){
        console.log($scope.subir.imagen);
        console.log($scope.subir.id);

       } 

    }

.controller('ImgCtrl', ['$scope', function($scope)
{
 $scope.uploadFile= function()
 {
    var name = $scope.name;
    var file = $scope.file;
    console.log (name);
    console.log(file);
 }
}])

/*****/
})();


 