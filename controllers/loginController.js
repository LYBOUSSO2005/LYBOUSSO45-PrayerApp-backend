angular.module('PrayerApp')
  .controller('LoginController', ['$scope', '$http', function($scope, $http) {
    $scope.email = '';
    $scope.password = '';
    $scope.error = '';

    $scope.login = function() {
      $http.post('http://localhost:5000/api/auth/login', {
        email: $scope.email,
        password: $scope.password
      }).then(function(response) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/admin.html'; // ou autre page protégée
      }).catch(function(err) {
        $scope.error = 'Identifiants invalides';
      });
    };
  }]);
