/* menu.js */
(function () {
  'use strict';

  angular
    .module('app')
    .component('isMenu', {
      templateUrl: 'app/header/menu/menu.html',
      controller: MenuController
    });

  MenuController.$inject = [];
  function MenuController() {
    // var vm = this;

  }
})();
