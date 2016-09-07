'use strict';

angular.module('kittenViewer', [])
  .service('kittyFiller', function() {

    //this service exists to generate random cat-themed text
    var filler = ['Cat ipsum dolor sit amet, sphynx balinese so birman malkin',
      'Kitten balinese so panther yet leopard for kitty',
      'Thai tom and lynx jaguar for savannah american bobtail egyptian mau',
      'Persian', 'Birman kitten yet tiger himalayan jaguar',
      'Tomcat british shorthair',
      'American bobtail bombay for siberian sphynx',
      'Burmese jaguar grimalkin birman and sphynx but grimalkin cheetah',
      'American bobtail tiger but siamese',
      'Bobcat siamese',
      'Lion russian blue, for malkin so abyssinian ',
      'Sphynx siberian, kitten american shorthair so cornish rex',
      'Singapura', 'Puma grimalkin',
      'Cheetah sphynx for singapura for american bobtail',
      'Siamese mouser yet tabby kitten',
      'Panther havana brown british shorthair',
      'Maine coon malkin, cornish rex savannah yet sphynx ragdoll',
      'Ragdoll burmese russian blue tiger, yet scottish fold but american bobtail',
      'Thai panther donskoy and devonshire rex',
      'Tomcat siberian',
      'Sphynx thai maine coon russian blue but scottish fold so ocicat yet cheetah'];

    function newCopy() {
      var randomNumber = Math.floor(Math.random() * 10 + 1);
      console.log(randomNumber);
      return fillerArr.slice(0, randomNumber).join('. ') + '.';
    }

    return {
      newCopy: newCopy,
    };

  })
  .controller('kittyNav', function($scope, kittyFiller) {
    $scope.kittyNumber = 1;
    $scope.kittyIpsum = kittyFiller.newCopy();
    $scope.next = function() {
      if ($scope.kittyNumber >= 16) {
        //loop counter if kittyNumber goes above 16
        $scope.kittyNumber = 1;
      } else {
        $scope.kittyNumber ++;
      }
      $scope.kittyIpsum = kittyFiller.newCopy();
    };
    $scope.prev = function() {
      if ($scope.kittyNumber > 1) {
        $scope.kittyNumber --;
      } else {
        //loop counter if kittyNumber goes below 1
        $scope.kittyNumber = 16;
      }
      $scope.kittyIpsum = kittyFiller.newCopy();
    };

  });
