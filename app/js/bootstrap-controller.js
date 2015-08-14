angular.module('HelloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl'];

function BootstrapController($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    var cellTemplate =
        '<div class="ui-grid-cell-contents" " > ' +
        '   <button class="btn btn-danger btn-xs" type="button" ' +
        '       ng-click="grid.appScope.excluirPessoa(row.entity)" > ' +
        '       <i class="fa fa-trash-o"></i>' +
        '   </button>' +
        '   <button class="btn btn-primary btn-xs" type="button" ' +
        '       ng-click="grid.appScope.editar(row.entity)" > ' +
        '       <i class="fa fa-edit"></i>' +
        '   </button>' +
        '</div>';

    var rowTemplate =
        '<div ng-style="grid.appScope.getRowStyle(row)"' +
        '   ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" ' +
        '   class="ui-grid-cell" ui-grid-cell>' +
        '</div>';

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { name: 'Nome', field: 'nome' },
            { name: 'Sobrenome', field: 'sobrenome' },
            { name: 'Data Nascimento', field: 'nascimento' },
            { name: 'Sexo', field: 'sexo' },
            { name: 'Acoes', field: 'acoes', cellTemplate: cellTemplate }
        ],
        enableColumnMenus: false
    };

    $scope.gridOptions.rowTemplate = rowTemplate;

    $scope.getRowStyle = function(row) {
        var rowStyle = {};
        if (angular.isDefined(row.entity.cor)) {
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    }

    $scope.gridItemClick = function(row, col, colIndex) {
        console.log(row);
    }

    $scope.salvar = function() {
        if ($scope.myForm.$invalid) {
            var obj = {};
            obj.class = 'warning';
            obj.timeout = 4000;

            $growl.box("Atençõo", "Erros encontrados no formulário.", obj).open();
            return;
        } else {
            var obj = {};
            obj.class = 'success';
            obj.timeout = 4000;

            $growl.box("Ok", "Formulário salvo com sucesso.", obj).open();
        }

        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
        // test commit
    }

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
    }

    $scope.excluirPessoa = function(pessoa) {
        $scope.pessoas.splice($scope.pessoas.indexOf(pessoa), 1);
    }

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.$pristine = true;
    }

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    }
}
