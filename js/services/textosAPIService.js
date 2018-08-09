angular.module("conteudo").factory("textosAPI", function ($http, config) {
   var _getTextos = function () {
       return $http({method: 'GET', url: config.baseUrl + "/textos"});
   };
   var _getTexto = function (id) {
       return $http({method: 'GET', url: config.baseUrl + "/texto/" + id});
   };
   var _saveTexto = function (texto) {
       return $http({url: config.baseUrl + "/textos", method: "POST", data: texto});
   };
   var _deleteTexto = function (texto) {
       return $http({url: config.baseUrl + "/texto/" + texto, method: "DELETE"});
   };
   return {
       getTextos: _getTextos,
       saveTexto: _saveTexto,
       getTexto: _getTexto,
       deleteTexto: _deleteTexto
   };
});