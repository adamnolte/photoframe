app.controller('powerController', function($scope, $http, $uibModalInstance) {
    
    $scope.screen = function () {
        $http({
            method: 'POST',
            url: 'php/togglescreen.php'
        }).success(function (data){
            $uibModalInstance.close();
        });
    };
    
     $scope.system = function () {
        $http({
            method: 'POST',
            url: 'php/turnoffsystem.php'
        });
       window.close();
    };
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    
});