angular.module('PrayerApp')
  .service('AdminService', ['$http', function($http) {
    const token = localStorage.getItem('token');

    this.getDemandes = function() {
      return $http.get('http://localhost:5000/api/demandes', {
        headers: { Authorization: 'Bearer ' + token }
      });
    };

    this.updateDemande = function(id, status) {
      return $http.put('http://localhost:5000/api/demandes/' + id, { status }, {
        headers: { Authorization: 'Bearer ' + token }
      });
    };
  }]);
