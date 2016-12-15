app.controller('uploadPhotoController', function($scope, $http, $uibModalInstance) {

    $scope.croppedImage = null;
    $scope.loading = false;
    
    $scope.upload = function () {
        $scope.loading = true;
        $http({
            method: 'POST', 
            url: 'php/addphoto.php',
            data: $scope.croppedImage
        }).success(function (data) {
            $scope.loading = false;
            $uibModalInstance.close(data);
        });
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});