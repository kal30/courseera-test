
(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter ('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'] //this helps when we minify
    function MsgController($scope, lovesFilter) {
        $scope.name = "Kalyani";
        $scope.stateOfBeing = "flower";
        $scope.cookieCost = .45;

        $scope.sayMessage = function () {
            var msg = "This has likes";
            //var output = $filter('uppercase')(msg);
            return msg;
        };

        $scope.sayLovesMessage = function () {
            var msg = "This is likes healthy";
            var output = lovesFilter(msg);
            return output;
        };

        $scope.flipImage = function () {
            $scope.stateOfBeing = "mountain";
        };
    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function TruthFilter() {
        return function (input, target, replace){
            input = input || "";
            input = input.replace("target", "replace");
            return input;
        }
    }

})();