// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150

export class RandomizedSet {
  numberArray: number[];
  numberMap: Map<number, number>;

  constructor() {
    this.numberArray = [];
    this.numberMap = new Map();
  }

  // Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
  insert(val: number): boolean {
    if (this.numberMap.has(val)) {
      return false;
    } else {
      this.numberArray.push(val);
      this.numberMap.set(val, this.numberArray.length - 1);
      return true;
    }
  }

  // Removes an item val from the set if present. Returns true if the item was present, false otherwise.
  remove(val: number): boolean {
    if (!this.numberMap.has(val)) {
      return false;
    }

    const indexOfVal = this.numberMap.get(val);

    if (indexOfVal === undefined) {
      throw new Error(
        "IndexOfVal to be removed was found to be undefined and should not have been.",
      );
    } else if (indexOfVal === this.numberArray.length - 1) {
      this.numberMap.delete(val);
      this.numberArray.pop();
      return true;
    } else {
      // pop from the array which will be used to "swap" with the param, val
      const popped = this.numberArray.pop();
      if (popped === undefined) {
        throw new Error(
          "The popped value was found to be undefined and should not have been in this state.",
        );
      }

      // replace the value in array at index indexOfVal with popped value
      this.numberArray[indexOfVal] = popped;
      // update the map's value with the popped key's new index, indexOfVal
      this.numberMap.set(popped, indexOfVal);
      // delete from the map the old key, val
      this.numberMap.delete(val);

      return true;
    }
  }

  getRandom(): number {
    if (this.numberArray.length === 0) {
      throw new Error("Cannot get random element from an empty array.");
    }

    const randomIndex = this.getRandomIntInclusive(this.numberArray.length - 1);

    return this.numberArray[randomIndex];
  }

  getRandomIntInclusive(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
