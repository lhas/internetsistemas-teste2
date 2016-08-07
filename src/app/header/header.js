/* header.js */
(function () {
  'use strict';

  angular
    .module('app')
    .component('isHeader', {
      templateUrl: 'app/header/header.html',
      controller: HeaderController
    });

  HeaderController.$inject = [];
  function HeaderController() {
    // var vm = this;

  }
})();
