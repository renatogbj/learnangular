/**
 * Created by Renato Oobj on 17/08/2015.
 */
angular.module('HelloWorldApp')
    .controller('CadastroPessoaController', CadastroPessoaController);

CadastroPessoaController.$inject = ['$scope', '$rootScope'];

function CadastroPessoaController($scope, $rootScope) {

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            alert("asdf");
        }
    );

}