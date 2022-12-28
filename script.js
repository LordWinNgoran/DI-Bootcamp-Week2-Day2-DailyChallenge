
// Daily Challenge: Not Bad

//1 Create a variable called sentence.
let sentence="This dinner is not that bad ! You cook well";

//2 Create a variable called wordNot where it’s value is the first appearance 
let wordNot =sentence.indexOf('not');

//3 Create a variable called wordBad where it’s value is the first appearance
let wordBad=sentence.indexOf('bad');

/* 4 If the word “bad” comes after the word “not”, 
you should replace the whole “not…bad” substring with “good”, then console.log the result. */

if (wordBad>wordNot) {
    let search=sentence.substring(wordNot,wordBad+3);
    let newSentence=sentence.replace(search," good ");
    console.log(newSentence);
}else{
  /*5  If the word “bad” does not come after “not” or the words are not in the sentence, 
  console.log the original sentence. */
    console.log(sentence);
}