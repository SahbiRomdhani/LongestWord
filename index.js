function findLongestWordWithMostVowels(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let maxVowelCount = 0;

  for (const word of words) {
    // Remove non-English letters and spaces
    const sanitizedWord = removeNonEnglishWords(word);
    // Count the vowels in the word
    const vowelCount = countVowels(sanitizedWord);
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

// Example usage
const sentence =
  "Smart P_eople leArn from everything and 1, average people from their experience, stupid people already, have all the answers";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log("Longest word with the most vowels:", longestWord);
