# JavaScript Hash Map Implementation 🗺️

An implementation of a Hash Map (or Hash Table) data structure in JavaScript using ES6 classes. This project demonstrates the fundamental concepts of hashing, storing key-value pairs, and common map operations from scratch.

### ⚠️ Important Note on Collisions

This implementation is for educational purposes and does not handle hash collisions. If two different keys hash to the same index in the internal array, the existing entry will be **overwritten**. A production-ready hash map would require a collision resolution strategy, such as chaining (using linked lists) or open addressing.

---
## Features

A `HashMap` class that supports the following methods:

-   `set(key, value)`: Adds or updates a key-value pair.
-   `get(key)`: Retrieves the entry associated with a key.
-   `has(key)`: Checks if a key exists in the map.
-   `remove(key)`: Deletes an entry by its key.
-   `length()`: Returns the number of stored entries.
-   `clear()`: Removes all entries from the map.
-   `keys()`: Returns an array of all keys.
-   `values()`: Returns an array of all values.
-   `entries()`: Returns an array of all `[key, value]` pairs.

---
## Usage

Below is an example of how to instantiate and use the `HashMap` class.

```javascript
// First, make sure the HashMap class is available in your file.

// Create a new hash map instance
const myMap = new HashMap();

// 1. Set key-value pairs
myMap.set('name', 'John Doe');
myMap.set('age', 30);
myMap.set('profession', 'Software Engineer');

// 2. Get a value by its key
console.log('Getting "name":');
myMap.get('name'); // Logs: { key: 'name', value: 'John Doe' }

// 3. Check if a key exists
console.log('Does "age" exist?');
myMap.has('age'); // Logs: true

// 4. Get the number of entries
console.log('Current length:', myMap.length()); // Returns: 3

// 5. Get all keys, values, and entries
console.log('Keys:', myMap.keys());     // Returns: ['name', 'age', 'profession']
console.log('Values:', myMap.values()); // Returns: ['John Doe', 30, 'Software Engineer']
console.log('Entries:', myMap.entries()); // Returns: [['name', 'John Doe'], ...]

// 6. Remove an entry
myMap.remove('age');
console.log('Length after removing "age":', myMap.length()); // Returns: 2

// 7. Clear the entire map
myMap.clear();
console.log('Map after clearing:', myMap.entries()); // Returns: []
