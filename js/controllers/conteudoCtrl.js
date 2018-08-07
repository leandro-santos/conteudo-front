angular.module("conteudo").controller("conteudoCtrl", function ($scope, textosAPI) {
    $scope.app = "APP Conteúdo";
    $scope.textos = [];

    var carregarTextos = function () {
        textosAPI.getTextos().then(function (response) {
            $scope.textos = response.data;
        }, function (error) {
            $scope.error = "Não foi possível carregar os dados!";
        });
    };
    $scope.adicionarTexto = function (texto) {
        textosAPI.saveTexto(texto).then(function (response) {
            delete $scope.texto;
            $scope.textoForm.$setPristine();
            carregarTextos();
        }, function (response) {
            $scope.error = "Não foi possível gravar os dados!";
        });
    };
    $scope.apagarTexto = function (textos) {
        $scope.textos = textos.filter(function (texto) {
            if (!texto.selecionado) return texto;
        });
    };
    $scope.isTextoSelecionado = function (textos) {
        return textos.some(function (texto) {
            return texto.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarTextos();
});