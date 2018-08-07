angular.module("conteudo").directive("uiAlert", function () {
    return {
        //corrigir ao instalar nodeJS
        //templateUrl: "view/alert.html",
        template: "<div class=\"ui-alert\">\n" +
            "    <div class=\"ui-alert-title\">\n" +
            "        {{title}}\n" +
            "    </div>\n" +
            "    <div class=\"ui-alert-message\" ng-transclude>\n" +
            "    </div>\n" +
            "</div>",
        replace: true,
        restrict: "AE",
        scope: {
            title: "@"
        },
        transclude: true
    };
});