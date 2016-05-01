angular.module('app', []);

angular.module('app').controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.searchname = 'Ding';
    $scope.search = function(searchname) {
        $http.get('data.json').then(function(respd) {
            var result, users;
            result = respd.data;

            if (result.success) {
                users = result.users;
                $scope.users = users;
            } else {
                alert('failed');
            }
        }, function() {
            alert('failed');
        });

        console.log('dddd');
    };
}]);

angular.module('app').directive('searchPanel', [function() {
    return {
        template: '<div>' +
        '<label for="searchname">Name1:</label> <input ng-model="searchname" id="searchname" placeholder="Enter a name">' +
        '<button ng-click="search(searchname)">Search</button>' +
        '</div>'
    };
}]);

angular.module('app').directive('resultPanel', [function() {
    return {
        templateUrl: 'result.html'
    };
}]);

angular.module('app').filter('genderFilter', [function() {
    return function(gender, p2) {
        console.log(p2.lastName);
        if (gender == 'M') {
            return 'Male';
        } else if (gender == 'F') {
            return 'Female';
        }
        return '';
    };
}]);