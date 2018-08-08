angular.module("conteudo").config(function ($routeProvider) {
    $routeProvider.when("/textos", {
        templateUrl: "view/texto.html"
    });
});