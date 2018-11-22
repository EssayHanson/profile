app.controller('mainController', ($scope) => {
    
    var person = {
        
        firstName: "Essay",
        lastName: "Hanson",
        imgSrc: "https://avatars3.githubusercontent.com/u/25266038?s=400&v=4"
    }

    $scope.message = "AngularJS";
    $scope.person = person;
});