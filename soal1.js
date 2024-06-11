function printFishBash(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
      result.push("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
      result.push("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
      result.push("bash");
    } else {
      console.log(i);
      result.push(i.toString());
    }
  }
  return result;
}

const testCases = [
  {
    input: 15,
    expectedOutput: [
      "1",
      "2",
      "fish",
      "4",
      "bash",
      "fish",
      "7",
      "8",
      "fish",
      "bash",
      "11",
      "fish",
      "13",
      "14",
      "fish bash",
    ],
  },
  {
    input: 10,
    expectedOutput: [
      "1",
      "2",
      "fish",
      "4",
      "bash",
      "fish",
      "7",
      "8",
      "fish",
      "bash",
    ],
  },
  { input: 5, expectedOutput: ["1", "2", "fish", "4", "bash"] },
];

for (const testCase of testCases) {
  const actualOutput = printFishBash(testCase.input);
  console.log(
    `Input: ${testCase.input}, Expected Output: ${testCase.expectedOutput}, Actual Output: ${actualOutput}`
  );

  for (let i = 0; i < testCase.expectedOutput.length; i++) {
    if (testCase.expectedOutput[i] !== actualOutput[i]) {
      console.log(
        `Test failed: expectedOutput[${i}] is ${testCase.expectedOutput[i]}, actualOutput[${i}] is ${actualOutput[i]}`
      );
    }
  }
}
