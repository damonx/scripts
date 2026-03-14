// Journal entry management system
const journal = [];

/**
 * Adds a new entry to the journal.
 * @param {string[]} events - Array of events that occurred.
 * @param {boolean} squirrel - Whether the squirrel transformation happened.
 */
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

// Sample entries
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// Output the events from the first entry
console.log(journal[0].events);
