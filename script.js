// Defines the blueprint for the HashMap data structure.
class HashMap {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nEntry = 0;
    this.loadFactor = this.nEntry % this.capacity;
    this.capacity = 16;
    this.bucket = new Array(this.capacity);
  }

  // A hashing function to convert a string key into a numeric index.
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31; // A prime number helps in creating a better hash distribution.

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * (hashCode + key.charCodeAt(i))) % this.capacity;
    }
    return hashCode;
  }

  // Adds a new key-value pair or updates an existing one.
  set(key, value) {
    let hashCode = this.hash(key);
    this.bucket[hashCode] = { key: key, value: value };
    this.nEntry++;
  }

  // Retrieves the value associated with a given key.
  get(key) {
    let hashCode = this.hash(key);
    console.log(this.bucket[hashCode]);
  }

  // Checks if a key exists in the hash map.
  has(key) {
    this.bucket.forEach((bucket) => {
      if (bucket && bucket.key == key) {
        console.log(true);
      }
    });
  }

  // Removes a key-value pair from the hash map.
  remove(key) {
    let index; // Iterates through all buckets to find the index of the key.
    this.bucket.forEach((bucket) => {
      if (bucket && bucket.key == key) {
        console.log(true);
        index = this.bucket.indexOf(bucket);
      }
    });
    delete this.bucket[index];
    this.nEntry--;
    if (index == undefined) {
      console.log(false);
    }
  }

  // Returns the total number of entries in the hash map.
  length() {
    return this.nEntry;
  }

  // Clears all entries from the hash map.
  clear() {
    this.bucket = new Array(this.capacity);
    console.log(this.bucket);
  }

  // Returns an array containing all the keys inside the hash map.
  keys() {
    return this.bucket.filter((bucket) => bucket).map((bucket) => bucket.key);
  }

  // Returns an array containing all the values.
  values() {
    return this.bucket.filter((bucket) => bucket).map((bucket) => bucket.value);
  }

  // Returns an array that contains each key, value pair.
  entries() {
    return this.bucket.filter((bucket) => bucket).map((bucket) => [bucket.key, bucket.value]);
  }
}

// Creates a new, empty instance of the HashMap class.
const test = new HashMap();
