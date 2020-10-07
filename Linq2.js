"use stict";

var DEBUG_MOD = true;
//TODO finish all LINQ functions
//some change just for test

//Array Extender | string Extender
const asEnumerable = function () {
  return new Enumerable(this);
};
Array.prototype.asEnumerable = asEnumerable;
String.prototype.asEnumerable = asEnumerable;

if (DEBUG_MOD) {
  var i = 0; // global to count tests

  var notice = function (text) {
    console.log(text);
  };
}

class Enumerable {
  //private field
  #collection = undefined;
  #queryQueue = []; // TODO finish as in C#

  //tested for first time works good (no bugs)
  constructor(...values) {
    if (DEBUG_MOD) {
      notice(++i);
    }
    this.#collection = this.asEnumerable(...values);
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

  //Any
  any() {
    return this.count() > 0;
  }

  //Append
  append() {
    throw new Error("Not implemented yet");
  }

  //AsEnumerable
  asEnumerable(...values) {
    if (!values.length) {
      return [];
    } else if (values.length === 1) {
      if (!values[0].length) {
        if (typeof values[0] === "number") {
          return new Array(values[0]);
        } else if (typeof values[0] === "string") {
          return [values[0]];
        } else {
          return [];
        }
      } else if (values[0].length === 1) {
        return [values[0][0]];
      } else {
        return [...values[0]];
      }
    } else {
      return [...values];
    }
    notice(this.#collection);
  }

  //Average
  average() {
    throw new Error("Not implemented yet");
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
  contains() {
    throw new Error("Not implemented yet");
  }

  //Count
  count(predicate) {
    if (typeof predicate === "function") {
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
  elementAt() {
    throw new Error("Not implemented yet");
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
  first() {
    if (this.any()) {
      return this.#collection[0];
    } else throw new Error("Sequence contains no elements");
  }

  //FirstOrDefault
  firstOrDefault() {
    if (this.any()) return this.#collection[0];
    else return undefined;
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

export { notice, Enumerable };
