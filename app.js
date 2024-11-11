//Q.1

// function filterLargerThan(arr, num) {
//     return arr.filter(element => element > num);
//   }
  
//   // Example usage:
//   let numbers = [1, 5, 8, 10, 15, 2];
//   let result = filterLargerThan(numbers, 5);
//   console.log(result);  // Output: [8, 10, 15]
  

//Q.2

// function extractUniqueChars(str) {
//     let uniqueChars = '';
//     for (let char of str) {
//       if (!uniqueChars.includes(char)) {
//         uniqueChars += char;
//       }
//     }
//     return uniqueChars;
//   }
  
//   // Example usage:
//   let str = "abcdabcdefgggh";
//   let unique = extractUniqueChars(str);
//   console.log(unique);  // Output: "abcdefgh"
  

//Q.3

// function longestCountryName(countries) {
//     let longest = "";
//     countries.forEach(country => {
//         if (country.length > longest.length) {
//             longest = country;
//         }
//     });
//     return longest;
// }

// // Example usage:
// let countryList = ["Australia", "Germany", "United States of America"];
// console.log(longestCountryName(countryList)); // Output: "United States of America"

//Q.4

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage:
// let sampleString = "Hello World";
// console.log(countVowels(sampleString)); // Output: 3

//Q.5

// function randomInRange(start, end) {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }

// // Example usage:
// console.log(randomInRange(1, 10)); // Output: Random number between 1 and 10
