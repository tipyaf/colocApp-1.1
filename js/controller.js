

colocApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/vue1', {
            templateUrl: 'views/vue1.html',
        }).
        when('/vue2', {
            templateUrl: 'views/vue2.html',
        }).
        otherwise({
            redirectTo: '/index'
        });
    }]);




colocApp.controller('coloCtrl', ['$scope', function($scope,$route,$window,$timeout){
    

    $scope.colocs=[];
    $scope.coloc=
    {
        name:"",
        type: [],
        buy:[]
    };
    $scope.selName = null;
    $scope.types = ["Courses mensuelles", "Courses usuelles", "Remboursement", "Dette" ];


    $scope.addColoc = function (coloc){
        $scope.colocs.push(angular.copy(coloc));


    };
    $scope.addMoney = function (colocIndex, buy){
        $scope.colocs[colocIndex].buy.push(parseInt(buy));

    };
    $scope.addType = function (colocTypeIndex, type){
        $scope.colocs[colocTypeIndex].type.push(type);
    };


    $scope.addNewType = function (typeMe){
        $scope.types.push(typeMe);
    };


    $scope.totalDepense = function(coloc){
        var somme= 0;
        var myColoc  = $scope.colocs[coloc];


        for (var prop in myColoc) {

            if (prop === "buy" )
            {
                for (var i = 0; i <myColoc[prop].length; i++)
                {
                    somme += myColoc[prop][i];
                }

            }
        }
        return somme;

    };
var newEnterBtn = document.getElementById('newEnter');
var newMoneyBtn = document.getElementById('newMoney');

    wrapLeft = function () {
        $scope.animate = "view-animate"
        // wrapRight()
    };
    wrapRight = function () {
        $scope.animate = "view-animate"
        // wrapLeft();

    }

    newEnterBtn.addEventListener('click', wrapRight);
    newMoneyBtn.addEventListener('click', wrapLeft);

    //  buy: parseInt($scope.buy));
}]);

