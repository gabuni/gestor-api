(function () {
  'use strict';

/*********************/
  angular
    .module('gestor.services', [])
    .constant('BaseUrl', 'http://localhost/api')
   //defino el servicio subir imagen factory + funcion
    .factory('subirImagen', subirImagen)
    .service('upload', upload)
    .service('insertarArticulo', insertarArticulo);


    function subirImagen (BaseUrl){
	
	//codigo incial
	 //    enviarImagen: function(formData, callback)
	 //    {
	 //    $http({
	 //        method: "POST",
	 //        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	 //        url: BaseUrl+'/v2/subir',
	 //        data: $.param(formData)
	 //    	});
		// }
	}

	function upload ($http, $q) 
	{
		this.uploadFile = function(file, name)
		{
			var deferred = $q.defer();
			var formData = new FormData();
			formData.append("name", name);
			formData.append("file", file);
			return $http.post("http://localhost/api/v2/subir", formData, {
				headers: {
					"Content-type": undefined
				},
				transformRequest: angular.identity
			})
			.success(function(res)
			{
				deferred.resolve(res);
			})
			.error(function(msg, code)
			{
				deferred.reject(msg);
			})
			return deferred.promise;
		}	
	}

	function insertarArticulo($http) //$http con esta funcion accedo a la Api
	{
		// return $http.get("http://localhost/api/v2/insertarFila");
		console.log($http.get("http://localhost/api/v2/insertarFila")); 

	}
})();
