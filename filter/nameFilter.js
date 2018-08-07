angular.module('conteudo').filter("name", function () {
    return function (input) {
        var listaDescricao = input.split(" ");
        var listaDescricaoFormatada = listaDescricao.map( function (descricao) {
            if (/(da|de)/.test(descricao)) return descricao;
            return descricao.charAt(0).toUpperCase() + descricao.substring(1).toLowerCase();
        });
        return listaDescricaoFormatada.join(" ");
    };
});