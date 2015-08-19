/**
 * Created by Renato Oobj on 12/08/2015.
 */
angular.module('HelloWorldApp',
    ['ngMessages', 'ui.growl', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ngMaterial', 'ui.router',
    'oc.lazyLoad', 'oobj-directives'])
        .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

    var home = {
        url: '/',
        templateUrl: '/app/views/home.html'
    };

    var produto = {
        url: '/produto/:id',
        templateUrl: '/app/views/produto/cadastro-produto.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        '/app/views/produto/cadastro-produto-controller.js'
                    ]
                });
            }
        }
    };

    var produtoPesquisa = {
        url: '/pesquisa',
        templateUrl: '/app/views/produto/pesquisa-produto.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        '/app/views/produto/pesquisa-produto-controller.js'
                    ]
                });
            }
        }
    };

    var pessoa = {
        abstract: true,
        url: '/pessoa',
        template: '<ui-view/>'
    };

    var pessoaCadastro = {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        '/app/views/pessoa/cadastro-pessoa-controller.js'
                    ]
                });
            }
        }
    };

    var pessoaPesquisa = {
        url: '/pesquisa',
        templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        '/app/views/pessoa/pesquisa-pessoa-controller.js'
                    ]
                });
            }
        }
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.pesquisa', produtoPesquisa)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', pessoaCadastro)
        .state('pessoa.pesquisa', pessoaPesquisa);

    $urlRouterProvider.otherwise("/");
}