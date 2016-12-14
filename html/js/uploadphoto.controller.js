app.controller('uploadPhotoController', function($scope, $http, $uibModalInstance) {

    $scope.croppedImage = null;
    
    $scope.upload = function () {
        $http({
            method: 'POST', 
            url: 'php/addphoto.php',
            data: $scope.croppedImage
        }).success(function (data) {
            $uibModalInstance.close(data);
        });
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});