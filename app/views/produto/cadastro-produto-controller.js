/**
 * Created by Renato Oobj on 17/08/2015.
 */
angular.module('HelloWorldApp')
    .controller('CadastroProdutoController', CadastroProdutoController);

CadastroProdutoController.$inject = ['$scope', '$stateParams'];

function CadastroProdutoController($scope, $stateParams) {
    console.log('código pessoa = ' + $stateParams.id);
}