function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const testCases = [
  { input: "radar", expectedOutput: true },
  { input: "level", expectedOutput: true },
  { input: "madam", expectedOutput: true },
  { input: "racecar", expectedOutput: true },
  { input: "hello", expectedOutput: false },
  { input: "world", expectedOutput: false },
  { input: "12345", expectedOutput: false },
  { input: "54321", expectedOutput: false },
];

for (const testCase of testCases) {
  const actualOutput = isPalindrome(testCase.input);
  console.log(
    `Input: ${testCase.input}, Expected Output: ${testCase.expectedOutput}, Actual Output: ${actualOutput}`
  );

  if (testCase.expectedOutput !== actualOutput) {
    console.error(
      `Test case failed! Expected ${testCase.expectedOutput} but got ${actualOutput}`
    );
  }
}
