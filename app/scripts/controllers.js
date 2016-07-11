(function () {
  'use strict';




  /***************************************************************/
  angular
    .module('gestor.controllers', [])
    .controller('ImgCtrl',  ImgCtrl)
    .controller('HomeCtrl', HomeCtrl);
    // el module y controller aparecen definidos en el archivo app.js
    function ImgCtrl ($scope, upload)
    {
        $scope.upFile= function()
        {
            var name = $scope.name;
            var file = $scope.file;
        
            upload.uploadFile(file, name).then(function(res)
            {
                console.log(res);
            })
        }    
    }

    function HomeCtrl($scope)
    {
      $scope.crearArticulo = function ()
      {
        alert("Crear articulo");
      }
    }

})();







 