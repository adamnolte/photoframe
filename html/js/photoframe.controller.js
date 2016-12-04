app.controller('photoFrameController', function($scope, $http) {

    $scope.photos=[];
    $scope.showMenu = false;
    $scope.showDelete = false;
    
    $scope.loadPhotos = function(){
        $http({
            method: 'GET', 
            url: '../php/getphotos.php'
        }).success(function(data) {
           $scope.photos = data;
        });
    }();
    
    $scope.deletePhoto = function(photo){
        $http({
            method: 'POST',
            data: photo,
            url: '../php/deletephoto.php'
        }).success(function(data) {
            if(data === "Success") {
                $scope.photos.splice( $scope.photos.indexOf(photo), 1);
            }
            else {
                console.log("Error Deleting File");
            }
        });
    }
    
    $scope.uploadPhoto = function(){
        console.log("uploading");
    }
    
    $scope.powerOff = function() {
        console.log("poweroff");
    }
    
    $scope.toggleMenu = function() {
        $scope.showMenu = !$scope.showMenu;
    }
    
    $scope.toggleDelete = function() {
        $scope.showDelete = !$scope.showDelete;
    }
});