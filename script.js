// Defines the blueprint for the HashMap data structure.
class HashMap {
  // The constructor is called when a new HashMap is created.
  constructor(key, value) {
    // These properties are initialized but not used in the class methods.
    this.key = key;
    this.value = value;
    // 'nEntry' tracks the number of key-value pairs stored.
    this.nEntry = 0;
    // Note: 'this.capacity' is undefined here, so this calculation won't work as expected.
    this.loadFactor = this.nEntry % this.capacity;
    // 'capacity' is the fixed size of the internal array (the buckets).
    this.capacity = 16;
    // 'bucket' is the array where key-value pairs are stored.
    this.bucket = new Array(this.capacity);
  }

  // A hashing function to convert a string key into a numeric index.
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31; // A prime number helps in creating a better hash distribution.

    // Loop through each character of the key.
    for (let i = 0; i < key.length; i++) {
      // Combine the hash code with the character code and use the modulo operator
      // to ensure the hash code stays within the bounds of the bucket array's capacity.
      hashCode = (primeNumber * (hashCode + key.charCodeAt(i))) % this.capacity;
    }
    return hashCode;
  }

  // Adds a new key-value pair or updates an existing one.
  set(key, value) {
    // Calculate the index for the key.
    let hashCode = this.hash(key);
    // Store the key-value pair at that index. Note: This will overwrite existing data on collision.
    this.bucket[hashCode] = { key: key, value: value };
    // Increment the count of entries.
    this.nEntry++;
  }

  // Retrieves the value associated with a given key.
  get(key) {
    // Calculate the index for the key.
    let hashCode = this.hash(key);
    // Log the entry found at that index.
    console.log(this.bucket[hashCode]);
  }

  // Checks if a key exists in the hash map.
  has(key) {
    // Iterates through all buckets. This is inefficient; a direct lookup is better.
    this.bucket.forEach((bucket) => {
      // Check if a bucket exists and if its key matches.
      if (bucket && bucket.key == key) {
        console.log(true);
      }
    });
  }

  // Removes a key-value pair from the hash map.
  remove(key) {
    let index;
    // Iterates through all buckets to find the index of the key.
    this.bucket.forEach((bucket) => {
      if (bucket && bucket.key == key) {
        console.log(true);
        index = this.bucket.indexOf(bucket);
      }
    });
    // The 'delete' operator removes the property but leaves an empty slot in the array.
    delete this.bucket[index];
    // Decrement the count of entries.
    this.nEntry--;
    // Check if the key was found.
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
    // Replaces the existing bucket array with a new, empty one of the same capacity.
    this.bucket = new Array(this.capacity);
    console.log(this.bucket);
  }

  // Returns an array containing all the keys inside the hash map.
  keys() {
    // Filters out empty slots, then maps the remaining entries to just their keys.
    return this.bucket.filter((bucket) => bucket).map((bucket) => bucket.key);
  }

  // Returns an array containing all the values.
  values() {
    // Filters out empty slots, then maps the remaining entries to just their values.
    return this.bucket.filter((bucket) => bucket).map((bucket) => bucket.value);
  }

  // Returns an array that contains each key, value pair.
  entries() {
    // Filters out empty slots, then maps the remaining entries to a [key, value] array.
    return this.bucket.filter((bucket) => bucket).map((bucket) => [bucket.key, bucket.value]);
  }
}

// Creates a new, empty instance of the HashMap class.
const test = new HashMap();
