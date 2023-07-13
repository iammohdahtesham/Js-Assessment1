// QUESTION 9 
// Write a program to check if a string is palindrome or not.

let palendrome = "civic"
let empty=""
for(let index=palendrome.length-1;index>=0;index--){
    empty+=palendrome.charAt(index)
}

if(palendrome.length-1==empty.length-1){
    isPalendrome = false
for(let index=0;index<empty.length;index++){
    if(empty.charAt(index)==palendrome.charAt(index)){
        isPalendrome=true
    }else{
        isPalendrome=false
        break
    }
}    
}else{
    console.log("this is not a valid palendrome")
}
console.log(isPalendrome)

// QUESTION 10
// 10.Find the frequency of elements in the array. 

function calculateFrequency(elements) {
    var frequencyCount={}
    for (var j = 0; j < elements.length; j++) {
      let value = elements[j];
      if (frequencyCount[value]) {
        frequencyCount[value]++;// if there is element already exist update its new frequency with the existing frequency
      } else {
        frequencyCount[value] = 1;//if there is no element set its frequency to 1
      }
    }
    return frequencyCount;
  }
  var elements = ["hello", "there" ,"where", "there","here", ];
  console.log(calculateFrequency(elements));

// QUESTION 11 
//Remove duplicates from a given unsorted array.  //Take an unsorted array of your choice.
let arr =[10,20,40,50,60,50,70,10,40,60]
console.log(remDuplicates(arr))

//Making function and using array.filter function to remove duplicates when indices of two elements match
function remDuplicates(arr){
    return arr.filter((i, index) => arr.indexOf(i) === index);
}
// QUESTION 12
// How to empty an array in JavaScript?
let arr =[10,20,30]
// Making the length of arr to 0 which remove all the date from the arr
arr.length=0
console.log(arr)

// QUESTION 15
// Given a string, reverse each word in the sentence.

function reverseStr(sentence) {
    // Split the sentence into an array of words
  let words = sentence.split(" ");
  let str="";
  for(var i=0;i<words.length;i++) // will iterate through each word
  {
      let reverse="";
      for(var j=words[i].length-1;j>=0;j--) // will iterate through each index of each word and reverse it
      {
          reverse=reverse+words[i].charAt(j);
      }
      str=str+reverse+" ";
      reverse="";
  }
    return str;
  }
  let input = "its ok not know but its ok to not try";
  console.log(reverseStr(input));


