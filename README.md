# Group and Sort Array Items

## Question

[Sloth Bytes | 2024-07-09](https://slothbytes.beehiiv.com/p/tech-stacks?utm_source=slothbytes.beehiiv.com&utm_medium=newsletter&utm_campaign=does-tech-stack-matter)

```
Advanced List Sort
Create a function that takes a list of numbers or strings and returns a list with the items from the original list stored into sub lists. Items of the same value should be in the same sub list.

Examples
advanced_sort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

advanced_sort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

advanced_sort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]

Notes
The sub lists should be returned in the order of each element's first appearance in the given list.
```

## Description

This utility takes a user input of numbers or strings (or both), groups them based on their value, and then sorts these group in order.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To use the code in this repository, you need to have [Node.js](https://nodejs.org/en) installed on your machine. Clone the repository to your local system using the following command:

```
git clone https://github.com/afiqzudinhadi/advanced-list-sort.git
```

Install the required dependencies by running the following command:

```
npm install
```

## Usage

1. Navigate to the repository's root directory.
2. Open terminal or command prompt.
3. Run the following command to execute the code:

```
npm run index
```

4. Follow the on-screen instructions to input the array items (strings or numbers or both!).
