(function () {
  'use strict';

/*********************/
  angular
    .module('portal.services', ['ngResource'])
    .constant('BaseUrl', 'http://localhost/api')
   //defino el servicio subir imagen factory + funcion
    .factory('subirImagen', subirImagen); 

    function subirImagen (BaseUrl, $resource){

	//     enviarImagen: function(formData, callback){
	//     $http({
	//         method: "POST",
	//         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	//         url: BaseUrl+'/v2/subir',
	//         data: $.param(formData)
	//     })
	//     .success(callback);
	// }
}
})();
