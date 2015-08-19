/**
 * Created by Renato Oobj on 18/08/2015.
 */
angular.module('oobj-directives')

.directive('oobjInputText', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/input-text/input-text.html',
            scope: {
                ngModel: '=',
                ngDisabled: '=?',
                ngRequired: '=?',
                label: '@',
                colspan: '@'
            },
            link: function ($scope, element, attrs) {
                $scope.classInputText = 'col-sm-3';

                if (angular.isDefined($scope.colspan)) {
                    $scope.classInputText = 'col-sm-' + $scope.colspan;
                }
            }
        };
    }
);

