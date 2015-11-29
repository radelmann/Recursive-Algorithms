///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
var countVowels = function(str) {
  var count = 0;

  var testFn = function(chr) {
    if (/[aeiou]/.test(chr)) {
      return 1;
    } else {
      return 0;
    }
  }

  if (str.length === 0) return 0;
  if (str.length === 1) return testFn(str);

  count += testFn(str.charAt(0)) + countVowels(str.slice(1));
  return count;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n) {
  var sum = 0;
  n += '';
  if (n.length === 1) return parseInt(n);

  sum += parseInt(n.charAt(0)) + recursiveSum(parseInt(n.slice(1)));

  return sum;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n) {
  if (n / 2 === 1) return true;

  return (n % 2 === 0) && isPowerOfTwo(n / 2);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, rate, years) {

  var interest = function() {
    return amount / rate;
  }

  if (years === 1) return amount + interest();

  amount += interest();
  return invest(amount, rate, years - 1);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max) {
  //base case
  if (min === max) return min + '';

  var results = min + ',' + printRangeUpDown(min + 1, max) + ',' + min;

  return results;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

var binaryTreeSum = function(tree) {
  if (!tree) return 0;

  var sum = 0;
  sum += tree.value;
  sum += binaryTreeSum(tree.left);
  sum += binaryTreeSum(tree.right);

  return sum;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  var set = function(node, value) {
    if (node) {
      node.insert(value);
    } else {
      node = new BinarySeachTree(value);
    }
    return node;
  }

  if (value < this.value) {
    this.left = set(this.left, value);
  } else {
    this.right = set(this.right, value);
  }
}

//create balanced Binary Search Tree from sorted array
Array.prototype.toBinarySearchTree = function() {
  if (this.length === 0) return;
  if (this.length === 1) return new BinarySearchTree(this[0]);

  var mid = Math.floor(this.length / 2);

  var left = this.slice(0, mid);
  var right = this.slice(mid + 1);

  //create binary search tree with array midpoint
  var bTree = new BinarySearchTree(this[mid]);

  bTree.left = left.toBinarySearchTree();
  bTree.right = right.toBinarySearchTree();

  return bTree;
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bTree = array.toBinarySearchTree();
console.dir(bTree);
