angular.module('PrayerApp')
  .controller('AdminController', ['$scope', 'AdminService', function($scope, AdminService) {
    $scope.demandes = [];

    AdminService.getDemandes().then(function(response) {
      $scope.demandes = response.data;
    });

    $scope.valider = function(demande) {
      AdminService.updateDemande(demande._id, 'validée').then(() => {
        demande.status = 'validée';
      });
    };

    $scope.rejeter = function(demande) {
      AdminService.updateDemande(demande._id, 'rejetée').then(() => {
        demande.status = 'rejetée';
      });
    };
  }]);
