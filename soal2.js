function sortArray(arr, order) {
  if (order === "asc") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  } else if (order === "desc") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  } else {
    throw new Error("Invalid order: asc or desc expected");
  }
  return arr;
}

const testCases = [
  { input: [5, 2, 4, 1, 3], order: "asc", expectedOutput: [1, 2, 3, 4, 5] },
  { input: [5, 2, 4, 1, 3], order: "desc", expectedOutput: [5, 4, 3, 2, 1] },
  {
    input: [10, 20, 30, 40, 50],
    order: "asc",
    expectedOutput: [10, 20, 30, 40, 50],
  },
  {
    input: [50, 40, 30, 20, 10],
    order: "desc",
    expectedOutput: [50, 40, 30, 20, 10],
  },
];

for (const testCase of testCases) {
  const actualOutput = sortArray(testCase.input.slice(), testCase.order);
  console.log(
    `Input: ${testCase.input}, Expected Output: ${testCase.expectedOutput}, Actual Output: ${actualOutput}`
  );

  for (let i = 0; i < testCase.expectedOutput.length; i++) {
    if (testCase.expectedOutput[i] !== actualOutput[i]) {
      console.error(
        `Test case failed! Expected ${testCase.expectedOutput[i]} but got ${actualOutput[i]}`
      );
    }
  }
}
