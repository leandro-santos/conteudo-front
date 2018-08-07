angular.module("conteudo").factory("textosAPI", function ($http, config) {
   var _getTextos = function () {
       return $http({method: 'GET', url: config.baseUrl + "/textos"});
   };
   var _saveTexto = function (texto) {
       return $http({url: config.baseUrl + "/textos", method: "POST", data: texto});
   };
   return {
       getTextos: _getTextos,
       saveTexto: _saveTexto
   };
});