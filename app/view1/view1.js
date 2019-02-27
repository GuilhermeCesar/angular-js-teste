'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$uibModal','$scope',function($uibModal,$scope) {
    $scope.openModal = (size, parentSelectior) => {
        console.log('Modal Open');
        var modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'View1Ctrl'
            // size: size,
            // appendTo: parentElem,
            // resolve: {
            //     items: function () {
            //         return $ctrl.items;
            //     }
            // }
        });
    };
}])
.controller('ModalController', ['$uibModal','$scope',function($uibModal,$scope) {

}]);
