// Define a variable named "imagingTime" and set it to null by default
let imagingTime = null;

// Check if "imagingTime" is not null
if (imagingTime !== null) {
  // If it's not null, convert it to an ISO string and get the time component
  imagingTime = imagingTime.toISOString().split("T")[1];
} else {
  // If it is null, set "imagingTime" to undefined
  imagingTime = undefined;
}

// Combine the date "1970-01-01T" with the time component of "imagingTime"
// to create a new Date object
const myDate = new Date("1970-01-01T" + imagingTime);
