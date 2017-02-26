(function () {
"use strict";

angular.module('admin')
.controller('SignupController', SignupController);


SignupController.$inject = ['$scope','SignupService', 'ApiPath','$http'];
function SignupController($scope, SignupService, ApiPath, $http) {
  var $ctrl = this;
 $ctrl.user ={};
 $ctrl.validForm = false;
  $ctrl.save = function () {
    return SignupService.saveUser($ctrl.user);
  };

  $ctrl.save = function () {

    $ctrl.validateShortName($ctrl.user.shortName)
    return SignupService.saveUser($ctrl.user);
  };

  $ctrl.validateShortName = function(shortName){

    return $http.get(ApiPath+"/menu_items/"+shortName+".json").then(function(response){
      $ctrl.validForm = true;
      return true;
    }).catch(function(){
      $ctrl.validForm = false;
      return false;
    });
  };

  $ctrl.validShortName = function(){
      return  $ctrl.validForm;
  }

}


})();
