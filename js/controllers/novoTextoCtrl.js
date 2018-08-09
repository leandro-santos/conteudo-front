angular.module("conteudo").controller("novoTextoCtrl", function ($scope, textosAPI, $location) {
    $scope.app = "APP Conteúdo";

    $scope.adicionarTexto = function (texto) {
        textosAPI.saveTexto(texto).then(function (response) {
            delete $scope.texto;
            $scope.textoForm.$setPristine();
            $location.path("/textos")
        }, function (response) {
            $scope.error = "Não foi possível gravar os dados!";
        });
    };
});