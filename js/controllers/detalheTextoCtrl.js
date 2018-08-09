angular.module("conteudo").controller("detalheTextoCtrl", function ($scope, texto) {
    $scope.texto = texto.data;
});