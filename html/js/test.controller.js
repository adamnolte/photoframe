app.controller('testController', function($scope) {
    $scope.photos = [];
    
    $scope.add = function() {
        $scope.photos.push("2016-12-14-08:38:42-img.png");
    }
});