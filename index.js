function findLongestWordWithMostVowels(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let maxVowelCount = 0;

  for (const word of words) {
    // Remove non-English letters and spaces
    const sanitizedWord = removeNonEnglishWords(word);

    // Count the vowels in the word either lowercase or uppercase
    const vowelCount = countVowels(sanitizedWord);

    // check if the word is longer than the longest word
    // then replace the new word with the longest
    // if the length is the same then check the maxVowelCount
    if (
      sanitizedWord.length > longestWord.length ||
      (sanitizedWord.length === longestWord.length &&
        vowelCount > maxVowelCount)
    ) {
      longestWord = sanitizedWord;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

function removeNonEnglishWords(word) {
  const sanitizedWord = word.replace(/[^a-zA-Z]/g, "");
  return sanitizedWord;
}

function countVowels(word) {
  const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;
  return vowelCount;
}

// input Sentences

const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const sentence1 = "JavaScript is an amazing programming language";
const sentence2 =
  "This is a test sentence with multiple words of different lengths";

// Execute the program

const longestWord = findLongestWordWithMostVowels(sentence1);
console.log("Longest word with the most vowels:", longestWord);
