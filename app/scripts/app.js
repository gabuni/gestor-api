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



  angular
    .module('gestor', ['ngRoute','gestor.controllers','ui.bootstrap'])
    .config(config);

   //gestor es el identificador de la aplicacion 

})();

