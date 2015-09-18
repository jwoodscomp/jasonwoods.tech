var jwApp = angular.module('jwApp', ['ngRoute', 'ngAnimate']);

jwApp.config(['$routeProvider', '$locationProvider', '$provide', function($routeProvider, $locationProvider, $provide) {
    $locationProvider.hashPrefix('!');
    
    $provide.decorator('ngViewDirective', function($delegate) {
        var directive = $delegate[0];
        directive.replace = true;

        return $delegate;
    });
    
    $routeProvider

    .when('/', {
        templateUrl: 'views/homepage.htm',
        controller: 'mainController',
        replace: true
    })

    .when('/resume', {
        templateUrl: 'views/resume.htm',
        controller: 'mainController',
        replace: true
    })
      
}]);

jwApp.service('primaryServices', function() {
    window.addEventListener('scroll', function() {
        if ((angular.element(document.querySelector( '.navbar' ))[0].getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop) > 25) {
            angular.element(document.querySelector( '.navbar-fixed-top' )).addClass("top-nav-collapse");
        } else {
            angular.element(document.querySelector( '.navbar-fixed-top' )).removeClass("top-nav-collapse");
        }
    });
});

jwApp.controller('mainController', ['$scope', '$location', '$log', 'primaryServices', function($scope, $location, $log, primaryServices) {
    $scope.currentLocation = $location.path();
    
    $scope.$on('$locationChangeStart', function() {
        $scope.currentLocation = $location.path();
        $log.info($scope.currentLocation);
    });
}]);

jwApp.controller('resumeController', ['$scope', '$location', '$log', 'primaryServices', function($scope, $location, $log, primaryServices) {
    $scope.currentLocation = $location.path();
    
    $scope.$on('$locationChangeStart', function() {
        $scope.currentLocation = $location.path();
        $log.info($scope.currentLocation);
    });
    
    $scope.expertiseList = {
        "backendTech": {
            "name":"Backend Technologies",
            "tech": [
                {"name":"Java"},
                {"name":"Ruby"},
                {"name":"C++"},
                {"name":"Spring Framework"},
                {"name":"JAXB"},
                {"name":"Hibernate"},
                {"name":"JUnit"},
                {"name":"Ruby on Rails"},
                {"name":"Node.js"}
            ]
        },                                    
        "frontendTech": {
            "name":"Frontend Technologies",
            "tech": [
                {"name":"JavaScript"},
                {"name":"JQuery"},
                {"name":"Bootstrap"},
                {"name":"Modernizr"},
                {"name":"MooTools"},
                {"name":"AngularJS"},
                {"name":"HTML5"},
                {"name":"CSS3"}
            ]
        },
        "dataTech": {
            "name":"Data Technologies",
            "tech": [
                {"name":"Oracle 9i - 11g"},
                {"name":"MySQL"},
                {"name":"mongoDB"},
                {"name":"PL/SQL"}
            ]
        },
        "serverTech": {
            "name":"Server and Network",
            "tech": [
                {"name":"Weblogic 10g - 12c"},
                {"name":"Cisco GSS"},
                {"name":"Solaris"}
            ]
        },
        "scmTech": {
            "name":"Source and Integration",
            "tech": [
                {"name":"Git"},
                {"name":"Accurev"},
                {"name":"Apache Ant"},
                {"name":"Jenkins"}
            ]
        },
        "ideTech": {
            "name":"Development Environments",
            "tech": [
                {"name":"Eclipse Helios - Mars"},
                {"name":"RubyMine"},
                {"name":"c9.io"},
                {"name":"Brackets"}
            ]
        }
    }
    
    $scope.workList = {
        "verizonJob": {
            "company":"Verizon Wireless",
            "location":"Alpharetta, GA",
            "position":"Lead Member Technical Staff (promoted 3 times in 18 months)",
            "time":"July/2011 - Present",
            "accomplishments": [
                {"text":"Support all issues on verizonwireless.com, triaging requests based on business and customer impact so that fixes can be prioritized"},
                {"text":"Received a company award for customer service and for saving the company more than $3M by identifying and immediately fixing an issue with credit card processing"},
                {"text":"Collaborate with business partners and executives at all levels daily to find teh best design and functionality improvements for our customer experience"},
                {"text":"Worked on development tasks at every level of the stack, coding solutions to problems on the front-end and back-end, debugging issues at the data layer and application servers"},
                {"text":"Coded backend applications in Java including the use of Spring Framework for MVC design, JDBC, RESTful and SOAP services, JSP, and JSON"},
                {"text":"Maintain highly multi-threaded applciations demanding 24/7 performance when tenths of a second on each step are crticial to customer satisfaction"},
                {"text":"Wrote and debugged a large amount of front-end functionality on desktop, mobile, and tablet platforms including Android and iOS, using technologies such as jQuery, Bootstrap, Modernizr, Sass, HTML5, and CSS3"},
                {"text":"Interviewed and recommended technical members for several teams in Verizon Wireless"},
                {"text":"Subject matter expert in certain functionality, including redesigns of the plan and pricing structure across the enterprise"},
                {"text":"Organized and coded a project individually to integrate vzw.com directly with Equifax webservices, inlcuding creating entirely new functionality and presentation on the vzw.com side"},
                {"text":"Led knowledge sharing within my team including creating numerous pages on an internal wiki"}
            ]
        },
        "beckfordJob": {
            "company":"Floyd Beckford, PhD.",
            "location":"Batesville, AR",
            "position":"Undergraduate Research Assistant",
            "time":"May/2009 - December/2010",
            "accomplishments": [
                {"text":"Made progress in achieving the greater goal of finding chemotherapy alternatives to Cisplatin"},
                {"text":"Operated with a team of scientists to create novel experiments and execute those ideas"},
                {"text":"Advances from my research have been published 4 times with me as an author"}
            ]
        }
    }
    
    $scope.leadership = {
        "sacBoard":{
            "position":"Student Activities Council Board Member",
            "time":"January/2008 - May/2009",
            "accomplishments": [
                {"text":"Collaborate with other board members to schedule engaging events"},
                {"text":"Market programs by creating professional presentations, flyers, and posters"},
                {"text":"Delegate responsibility for program set-up and clean-up"},
                {"text":"Evaluate potential talent and perform a cost analysis before procuring performing artists"}
            ]
        }
    }
}]);

jwApp.directive('navbarDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.htm',
        replace: true
    }
});