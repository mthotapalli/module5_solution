(function () {
"use strict";

angular.module('admin')
.controller('SignupController', SignupController);


SignupController.$inject = ['$scope','SignupService', 'ApiPath','$http'];
function SignupController($scope, SignupService, ApiPath, $http) {
  var $ctrl = this;
 
 $ctrl.validForm;
 $ctrl.validShortName;;
  // $ctrl.save = function () {
  //   return SignupService.saveUser($ctrl.user);
  // };

  $ctrl.save = function () {
    var menuDetail;

    //return SignupService.saveUser($ctrl.user);

    SignupService.getMenuDetails($ctrl.user.shortName)
    .then(function(dish){
      menuDetail = dish;
      $ctrl.user.dishName = menuDetail.name;
      $ctrl.user.dishDesc = menuDetail.description;
      $ctrl.validShortName = true;
      $ctrl.validForm = true;
      SignupService.saveUser($ctrl.user);
    }).catch(function(err){
      $ctrl.validShortName = false;
        $ctrl.validForm = false;

    });
  };


}


})();
