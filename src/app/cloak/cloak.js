/* cloak.js */
(function () {
  'use strict';

  angular
    .module('app')
    .component('isCloak', {
      templateUrl: 'app/cloak/cloak.html',
      controller: CloakController
    });

  CloakController.$inject = [];
  function CloakController() {
    var vm = this;
    var brasilia = true;
    var canada = true;
    var marte = true;
    var amsterdam = true;

    vm.brasilia = brasilia;
    vm.canada = canada;
    vm.marte = marte;
    vm.amsterdam = amsterdam;
    vm.show = show;
    vm.hide = hide;

    function show(cloak) {
      vm[cloak] = true;
    }

    function hide(cloak) {
      vm[cloak] = false;
    }

  }
})();
