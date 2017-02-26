(function() {
"use strict";

angular.module('admin')
.service('SignupService', SignupService);

/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
 SignupService.$inject = ['$q']
function SignupService($q) {
  var service = this;
  service.user = {};


  /**
   * Load the current user with username and token
   */
  service.saveUser = function(user) {
      service.user = user;
  };

  service.getUser = function() {
  return  $q.when(service.user).then(function(user){
    console.log(user);
    return user;
  });

  };


}


})();
