/* contact.js */
(function () {
  'use strict';

  angular
    .module('app')
    .component('isContact', {
      templateUrl: 'app/contact/contact.html',
      controller: contactController
    });

  contactController.$inject = [];
  function contactController() {
    var vm = this;

    vm.show = show;

    function show(contact) {
      vm[contact] = true;
    }

  }
})();
