angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })
    .state('cloak', {
      url: '/o-relogio',
      template: '<is-cloak></is-cloak>'
    })
    .state('contact', {
      url: '/contato',
      template: '<is-contact></is-contact>'
    });
}
