//1.feladat
function getMiddle(s) {
    const length = s.length;
    if(length % 2 === 0) {
        return s.substring(length / 2 - 1, length / 2 + 1);
    }
    return s.charAt(Math.floor(length / 2));
}
//2.feladat
var isSquare = function(n){
    if(n < 0) {
        return false;
    }
    if(n === 0) {
        return true;
    }
    return Math.sqrt(n) % 1 === 0;
}
//3.feladat
function stringClean(s){
    return s.replace(/\d/g, "");
  }
//4.feladat
function bmi(weight, height) {
    const bmi = weight / Math.pow(height, 2);
    if(bmi <= 18.5) {
        return "Underweight";
    }
    if(bmi <= 25) {
        return "Normal";
    }
    if(bmi <= 30) {
        return "Overweight";
    }
    if(30 < bmi) {
        return "Obese";
    }
  }