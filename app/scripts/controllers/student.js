angular.module('thumbsCheckApp')
  .controller('StudentCtrl', function($scope, $firebaseObject, $firebase, Auth) {
    var ref = new Firebase('https://waffleup.firebaseio.com/');
    var responsesRef = ref.child('responses'); // collection within the database.

    $scope.student1ID = '1';
    $scope.student2ID = '2';

    $firebaseObject(responsesRef).$bindTo($scope, 'students');

    // $firebaseObject(responsesRef).$bindTo($scope, 'student2');


    $scope.logout = function() {
      Auth.$unauth();
    };
    // $scope.students = $firebaseObject(responsesRef);

    // var count = 100;
    // while(count--){
    //   // var sid = 'student'+ count + 'ID';
    //   // $scope[sid] = count.toString();
    //   $firebaseObject(responsesRef.child(count.toString())).$bindTo($scope, 'student'+ count.toString());
    // }

  });
