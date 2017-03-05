(function () {
"use strict";

angular.module('admin')
.controller('InfoController', InfoController);


InfoController.$inject = ['info','ApiPath'];
function InfoController(info, ApiPath) {
  var $ctrl = this;

   $ctrl.showSign = true;

   if (Object.keys(info).length == 0) {
     $ctrl.showSign = true;
   } else {
     $ctrl.showSign = false;
     $ctrl.user = info;
     $ctrl.imageUrl = ApiPath + "/images/" + $ctrl.user.shortName + ".jpg";
   }
}


})();
