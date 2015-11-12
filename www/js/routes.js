angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.peta', {
      url: '/peta',
      views: {
        'tab1': {
          templateUrl: 'templates/peta.html',
          controller: 'petaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.detailLaporan', {
      url: '/detaillaporan',
      views: {
        'tab2': {
          templateUrl: 'templates/detailLaporan.html',
          controller: 'detailLaporanCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.profil', {
      url: '/profil',
      views: {
        'tab3': {
          templateUrl: 'templates/profil.html',
          controller: 'profilCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.aspalkeun', {
      url: '/page5',
      views: {
        'tab4': {
          templateUrl: 'templates/aspalkeun.html',
          controller: 'aspalkeunCtrl'
        }
      }
    })
        
      
    
      
        
    .state('laporan', {
      url: '/page6',
      templateUrl: 'templates/laporan.html',
      controller: 'laporanCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/peta');

});