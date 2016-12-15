app.controller('photoFrameController', function($scope, $http, $uibModal) {

    $scope.photos=[];
    $scope.showMenu = false;
    $scope.showDelete = false;
    
    $scope.loadPhotos = function(){
        $http({
            method: 'GET', 
            url: 'php/getphotos.php'
        }).success(function(data) {
           $scope.photos = data;
        });
    }();
    
    $scope.deletePhoto = function(photo){
        $http({
            method: 'POST',
            data: photo,
            url: 'php/deletephoto.php'
        }).success(function(data) {
            if(data === "Success") {
                $scope.photos.splice( $scope.photos.indexOf(photo), 1);
            }
            else {
                console.log('Deleting File');
            }
        });
    };
    
    $scope.openPhotoModal = function(){
        $scope.showDelete = false;
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'photomodal.html',
          controller: 'uploadPhotoController',
        });
        
        modalInstance.result.then(function (newPhoto) {
            $scope.photos.push(newPhoto);
        });
    };
    
    $scope.powerOff = function() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'powermodal.html',
          controller: 'powerController',
        });
        
        modalInstance.result.then(function (newPhoto) {
            $scope.photos.push(newPhoto);
        });
        
        
    };
    
    $scope.toggleMenu = function() {
        $scope.showMenu = !$scope.showMenu;
    };
    
    $scope.toggleDelete = function() {
        $scope.showDelete = !$scope.showDelete;
    };
});