var app = angular.module("myApp", ['ngRoute']);

app.controller("personController", ['$http', function($http) {
    this.persons = [
       { id: 1, name: 'Jens', age: 18 },
       { id: 2, name: 'Anders', age: 19 },
       { id: 3, name: 'Bo', age: 19 },
       { id: 4, name: 'Hans', age: 17 },
       { id: 5, name: 'Thomas', age: 20 }
   ];
    
   this.addPerson = function() {
       this.persons.push({
           id: this.persons.length + 1,
           name: this.name,
           age: this.age
       });
       
       this.name = '';
       this.age = '';
   };
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
                .when('/person/:id', {
                    templateUrl: 'person.html',
                    controller: ['$routeParams', function($routeParams) {
                            this.id = $routeParams.id;
                    }],
                    controllerAs: 'routeCtrl'
                })
                .when('/add', {
                    templateUrl: 'addperson.html'
                })
                .otherwise({redirectTo: '/'});
}]);
