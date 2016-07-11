(function () {
  'use strict';

  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/imagenes.tpl.html',
        controller: 'ImgCtrl'
      })

      .otherwise({ reditrectTo : '/listado' });

  } 



// .controller('ImgCtrl', ['$scope', 'upload',function($scope, upload)
// {
//  $scope.uploadFile= function()
//  {
//     var name = $scope.name;
//     var file = $scope.file;
//     console.log (name);
//     console.log(file);
//  }
// }])


// .directive('uploaderModel', ["$parse", function ($parse) {
//       return {
//         restrict: 'A',
//         link: function (scope, iElement, iAttrs) 
//         {
//           iElement.on('change', function(e)
//           {  
//             $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]); //esto tendra el campo te tipo file

//           }); 
//         }
//       };
// }])








  angular
    .module('gestor', ['ngRoute','gestor.controllers','ui.bootstrap'])
    .config(config);

   //gestor es el identificador de la aplicacion 

})();





