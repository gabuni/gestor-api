(function () {
  'use strict';

/*********************/
  angular
    .module('gestor.services', ['ngResource'])
    .constant('BaseUrl', 'http://localhost/api')
   //defino el servicio subir imagen factory + funcion
    .service('upload', upload)
    .service('addArticulo', addArticulo);


  	function upload ($http, $q) 
	{
		//Este servicio utiliza la api que carga una imagen y redefine su tamaño
		//$q directiva o servicio del core de Angular que contiene toda la funcionalidad de las promesas
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

	function addArticulo($http, $q) {  
    return {
        getAll: getAll
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('http://localhost/api/v2/insertarFila')
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
}
})();
