angular.module("conteudo").controller("conteudoCtrl", function ($scope, textosAPI, textos) {
    $scope.app = "APP Conteúdo";
    $scope.textos = textos.data;

    var deletaTexto = function (texto) {
        textosAPI.deleteTexto(texto.id).then(function (response) {
            var index = $scope.textos.indexOf(texto);
            $scope.textos.splice(index, 1);
            return response;
        }, function (response) {
            console.log(response);
        });
    }

    $scope.apagarTexto = function (textos) {
        textos.forEach(function (texto) {
            if (texto.selecionado) deletaTexto(texto);
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

});