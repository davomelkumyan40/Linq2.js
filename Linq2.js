"use strict";

var DEBUG_MOD = false;
//TODO finish all LINQ functions
//some change just for test

//Array Extender | string Extender
const asEnumerable = function () {
  return new Enumerable(...this);
};
Array.prototype.asEnumerable = asEnumerable;
String.prototype.asEnumerable = asEnumerable;

if (DEBUG_MOD) {
  var i = 0; // global to count tests

  var notice = function (text) {
    console.log(text);
  };
}

export default class Enumerable {
  //private field
  #collection = undefined;
  #queryQueue = []; // TODO finish as in C#

  //tested for first time works good (no bugs)
  constructor(...values) {
    if (DEBUG_MOD) {
      notice(++i);
    }
    if (values.length === 1 && values[0] === undefined)
      return;
    this.#collection = this.asEnumerable(values);
  }

  //Aggrigate
  aggrigate(predicate) {
    return typeof predicate === "function"
      ? this.#collection.reduce(predicate)
      : undefined;
  }

  //All
  all(predicate) {
    if (typeof predicate === "function") {
      for (let i = 0; i < this.count(); i++) {
        if (!predicate(this.#collection[i], i, this.#collection)) return false;
      }
      return true;
    }
    throw new Error("Predicate not passed");
  }

  //TODO
  //Any
  any(predicate) {
    if (typeof predicate === "function")
      return this.firstOrDefault(predicate) && true;
    return this.count() > 0;
  }

  //Append
  append(item) {
    let temp = new Enumerable(...this.#collection);
    temp.#collection.push(item);
    this.#collection = temp.#collection;
    return this;
  }

  //AsEnumerable
  asEnumerable(values) {
    if (!values || !values.length) return [];
    if (values.length === 1) {
      if (typeof values[0] === "string")
        return [...values[0]];
      if (typeof values[0] === "number")
        return new Array(values[0]);
    }
    return [...values];
  }

  //Only if types are numeric
  //Average
  average() {
    if (this.all((el, i, arr) => typeof el === "number")) {
      return this.aggrigate((acc, curr) => acc + curr) / this.count();
    }
    throw new Error("No number type found in collection");
  }

  //Cast
  cast(type) {
    throw new Error("Not implemented yet");
  }

  //Concat
  concat() {
    throw new Error("Not implemented yet");
  }

  //Contains
  contains(value) {
    if (typeof value === "number") {
      for (let i = 0; i < this.count(); i++)
        if (this.#collection[i] === value) return true;
      return false;
    }
    if (typeof value === "string") {
      if (this.all((v) => v.length === 1))
        return this.aggrigate((a, c) => a + c).includes(value)
      for (let i = 0; i < this.count(); i++) {
        if (this.#collection[i].includes)
          if (this.#collection[i].includes(value))
            return true;
      }
    }
  }

  //Count
  count(predicate) {
    if (typeof predicate === "function") {
      return this.#collection.filter(predicate).length;
    } else return this.#collection.length;
  }

  //DefaultIfEmpty
  defaultIfEmpty(defaultValue) {
    if (this.any()) return this;
    else return new Enumerable([defaultValue]);
  }

  //Distinct
  distinct() {
    return this.#collection.filter((v, i, a) => a.indexOf(v) === i);
  }

  //ElementAt
  elementAt(index) {
    if (this.#collection.length > index)
      throw new Error(`Index [${index}] is out of range`);
    return this.#collection[index];
  }

  //ElementAtOrDefault
  elementAtOrDefault() {
    throw new Error("Not implemented yet");
  }

  //Empty
  empty() {
    throw new Error("Not implemented yet");
  }

  //Except
  except() {
    throw new Error("Not implemented yet");
  }

  //First
  first(predicate) {
    let result = this.firstOrDefault(predicate);
    if (result === undefined)
      throw new Error("Sequence contains no elements");
    return result;
  }

  //FirstOrDefault
  firstOrDefault(predicate) {
    if (!predicate) {
      if (this.any()) return this.#collection[0];
      return undefined;
    }
    if (typeof predicate === "function") {
      let result = undefined;
      this.#collection.forEach((v, i, a) => {
        if (predicate(v, i, a)) {
          result = v;
          return
        }
      });
      return result;
    }
  }

  //GroupBy
  groupBy() {
    throw new Error("Not implemented yet");
  }

  //GroupJoin
  groupJoin() {
    throw new Error("Not implemented yet");
  }

  //Intersect
  intersect() {
    throw new Error("Not implemented yet");
  }

  //Join
  join() {
    throw new Error("Not implemented yet");
  }

  //Last
  last() {
    throw new Error("Not implemented yet");
  }

  //LastOrDefault
  lastOrDefault() {
    throw new Error("Not implemented yet");
  }

  //LongCount
  longCount() {
    throw new Error("Not implemented yet");
  }

  //Max
  max() {
    throw new Error("Not implemented yet");
  }

  //Min
  min() {
    throw new Error("Not implemented yet");
  }

  //OfType
  ofType() {
    throw new Error("Not implemented yet");
  }

  //OrderBy
  orderBy() {
    throw new Error("Not implemented yet");
  }

  //OrderByDescending
  orderByDescending() {
    throw new Error("Not implemented yet");
  }

  //prepend
  prepend() {
    throw new Error("Not implemented yet");
  }

  //Range
  range() {
    throw new Error("Not implemented yet");
  }

  //Repeat
  repeat() {
    throw new Error("Not implemented yet");
  }

  //Reverse
  reverse() {
    throw new Error("Not implemented yet");
  }

  //Select
  select() {
    throw new Error("Not implemented yet");
  }

  //SelectMany
  selectMany() {
    throw new Error("Not implemented yet");
  }

  //SequenceEqual
  sequenceEqual() {
    throw new Error("Not implemented yet");
  }

  //Single
  single() {
    throw new Error("Not implemented yet");
  }

  //SingleOrDefault
  singleOrDefault() {
    throw new Error("Not implemented yet");
  }

  //Skip
  skip() {
    throw new Error("Not implemented yet");
  }

  //SkipLast
  skipLast() {
    throw new Error("Not implemented yet");
  }

  //SkipWhile
  skipWhile() {
    throw new Error("Not implemented yet");
  }

  //Sum
  sum() {
    throw new Error("Not implemented yet");
  }

  //Take
  take() {
    throw new Error("Not implemented yet");
    return this;
  }

  //TakeLast
  takeLast() {
    throw new Error("Not implemented yet");
    return this;
  }

  //TakeWhile
  takeWhile() {
    throw new Error("Not implemented yet");
    return this;
  }

  //ThenBy
  thenBy() {
    throw new Error("Not implemented yet");
  }

  //ThenByDescending
  thenByDescending() {
    throw new Error("Not implemented yet");
  }

  //ToArray
  toArray() {
    return this.#collection;
  }

  //ToString
  toString() {
    return `${this.#collection}`;
  }

  //Union
  union() {
    throw new Error("Not implemented yet");
  }

  //Where
  where(predicate) {
    if (typeof predicate === "function")
      this.#collection = this.#collection.filter(predicate);
    return this;
  }

  //Zip
  zip() {
    throw new Error("Not implemented yet");
  }
}

