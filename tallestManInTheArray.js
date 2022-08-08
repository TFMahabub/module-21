// largest number of age-

function getLargestNumbers(numbers){
  let largest = 0;
  for( let i = 0; i < numbers.length; i++){
      let elemens = numbers[i];
      if(largest < elemens){
         let largest = elemens;
      }
  }
  return largest;
}

let ageNumbers = [23, 34, 55, 33, 66, 77, 78, 10];
bigNumber = getLargestNumbers(ageNumbers);
console.log(bigNumber);