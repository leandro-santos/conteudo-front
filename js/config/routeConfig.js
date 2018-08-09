angular.module("conteudo").config(function ($routeProvider) {
    $routeProvider.when("/textos", {
        templateUrl: "view/texto.html",
        controller: "conteudoCtrl",
        resolve: {
            textos: function (textosAPI) {
                return textosAPI.getTextos();
            }
        }
    });
    $routeProvider.when("/novo-texto", {
        templateUrl: "view/novoTexto.html",
        controller: "novoTextoCtrl"
    });
    $routeProvider.when("/detalhe-texto/:id", {
        templateUrl: "view/detalheTexto.html",
        controller: "detalheTextoCtrl",
        resolve: {
            texto: function (textosAPI, $route) {
                return textosAPI.getTexto($route.current.params.id);
            }
        }
    });
    $routeProvider.when("/erro", {
       templateUrl: "view/erro.html"
    });
    $routeProvider.otherwise({redirectTo: "/textos"});
});