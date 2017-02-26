(function() {
"use strict";

angular.module('admin')
.component('user', {
  templateUrl: 'src/admin/signup/userinfo.html',
  bindings: {
    info: '<'
  },
});


})();
