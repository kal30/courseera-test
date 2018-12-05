
(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'] //this helps when we minify
    function MsgController($scope) {
        $scope.name = "Kalyani";
        $scope.stateOfBeing = "flower";
        $scope.sayMessage = function () {
            return "Some message";
        };

        $scope.flipImage = function () {
            $scope.stateOfBeing = "mountain";
        };
    }

})();