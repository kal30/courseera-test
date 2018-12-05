
(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'] //this helps when we minify
    function DIController($scope, $filter) {
        $scope.name = "Kalyani";
        

        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }

   

    }

})();