angular.module('HelloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl'];

function BootstrapController($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.salvar = function() {
        if ($scope.myForm.$invalid) {
            var obj = {};
            obj.class = 'warning';
            obj.timeout = 4000;

            $growl.box("Erro", "Falha ao salvar formulario.", obj).open();
            return;
        } else {
            var obj = {};
            obj.class = 'success';
            obj.timeout = 4000;

            $growl.box("Sucesso", "Formulario salvo com sucesso.", obj).open();
        }

        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
        // test commit
    }

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
    }

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.$pristine = true;
    }

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    }
}
