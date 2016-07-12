(function () {
  'use strict';




  /***************************************************************/
  angular
    .module('gestor.controllers', [])
    .controller('ImgCtrl',  ImgCtrl)
    .controller('HomeCtrl', HomeCtrl);
    // .controller('PagesCtrl', PagesCtrl);
    // el module y controller aparecen definidos en el archivo app.js
    function ImgCtrl ($scope, upload)
    {
        $scope.upFile= function()
        {
            var name = $scope.name;
            var file = $scope.file;
            //llamo al servicio 'upload'
            upload.uploadFile(file, name).then(function(res)
            {
                console.log(res);
            })
        }    
    }

   
   function HomeCtrl(addArticulo, $scope) {  
    
    
     
     $scope.crearArticulo = function(){  
            addArticulo
                .getAll()
                .then(function(data) {
                    $scope.elementos = data;
                    console.log( $scope.elementos);
                })
               
        }
  }

//});

})();







 