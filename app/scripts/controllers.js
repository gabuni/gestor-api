(function () {
  'use strict';




  /***************************************************************/
  angular
    .module('gestor.controllers', [])
    .controller('ImgCtrl',  ImgCtrl);
    // el module y controller aparecen definidos en el archivo app.js
    function ImgCtrl ($scope)
    {
       $scope.subir= {};
       $scope.btnSubir= function ()
       {
          console.log($scope.subir.imagen);
          console.log($scope.subir.id);
       } 
    }

})();


 