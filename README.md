# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eyoa/lotide`

**Require it:**

`const _ = require('@eyoa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail([Array])`: Returns last element of an array.
* `middle([Array])`: Returns the middle element of an odd length array and middle 2 elements of an even lenth array.
* `head([Array])`: Returns the first element of an array.
* `countLetters("string")`: Returns an object where the keys are letters in the string passed and the values are the counts of that character occuring.
* `countOnly([Array], object)`: Returns an object where the keys are the keys in the object that have the value true. And the value of the object is the times that key occurs in the array. 
* `findKey(SearchObj, callback)`:  Scans object and returns first key for when the callback returns true if no key then return undefined.
* `findKeyByValue(SearchObj, value)`: Returns first key which contains the value. Returns undefined if no key with value is found.
* `eqArrays([Array], [Array])`: Returns boolean whether 2 arrays are equal or not. 
* `eqObjects(Object, Object)`: Returns boolean whether 2 Objects are equal or not. Also works for Arrays.
* `flatten([Array])`: Takes in an array including nested arryas and return flattened version of array (only 1 level deep).
* `letterPositions("string")`: Returns an object the keys are the letters and the values are indicies in the string where each character is found.
* `map([Array], callback)`: Function takes an array to map and a callback function, returns array where callback is true.
* `takeUntil([Array], callback)`: Function takes a slice of the array until callbacak returns true
* `without([Array], [Array])`:  Returns subset of a given array removing unwanted elements from second array.
* `assertArraysEqual([Array], [Array])`: Logs whether or not 2 arrays are equal. 
* `assertEqual(value, value)`: Logs whether or not 2 values are equal (mainly for primitive values).
* `assertObjectsEqual(Object, Object)`: Logs whether or not 2 Objects are equal.

